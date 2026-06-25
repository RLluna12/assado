"use client"

import { useState } from "react"
import Image from "next/image"
import { Xmark, Minus, Plus, Trash, ArrowRight } from "iconoir-react"
import { useCart } from "@/contexts/cart-context"

type PaymentMethod = "pix" | "dinheiro" | "debito" | "credito"

const PAYMENT_LABELS: Record<PaymentMethod, string> = {
  pix: "Pix",
  dinheiro: "Dinheiro",
  debito: "Cartao de Debito",
  credito: "Cartao de Credito",
}

export function CartDrawer() {
  const { items, removeItem, updateQuantity, clearCart, total, isOpen, setIsOpen } = useCart()

  const [step, setStep] = useState<"cart" | "checkout">("cart")
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [payment, setPayment] = useState<PaymentMethod>("pix")
  const [needsChange, setNeedsChange] = useState(false)
  const [changeFor, setChangeFor] = useState("")

  function formatCurrency(value: number) {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  }

  function buildWhatsAppMessage() {
    const lines: string[] = []
    lines.push("*🍕 Novo Pedido - Ponto do Assado*")
    lines.push("")
    lines.push("*Itens:*")
    items.forEach((item) => {
      lines.push(`• ${item.quantity}x ${item.name} — ${formatCurrency(item.priceValue * item.quantity)}`)
    })
    lines.push("")
    lines.push(`*Total: ${formatCurrency(total)}*`)
    lines.push("")
    lines.push("*Dados do Cliente:*")
    lines.push(`• Nome: ${name}`)
    lines.push(`• Endereco: ${address}`)
    lines.push(`• Pagamento: ${PAYMENT_LABELS[payment]}`)
    if (payment === "dinheiro") {
      if (needsChange && changeFor) {
        lines.push(`• Troco para: R$ ${changeFor}`)
      } else {
        lines.push("• Sem troco necessario")
      }
    }
    return encodeURIComponent(lines.join("\n"))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !address.trim()) return
    const msg = buildWhatsAppMessage()
    window.open(`https://wa.me/5511954364018?text=${msg}`, "_blank")
    clearCart()
    setIsOpen(false)
    setStep("cart")
    setName("")
    setAddress("")
    setPayment("pix")
    setNeedsChange(false)
    setChangeFor("")
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        onClick={() => { setIsOpen(false); setStep("cart") }}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <h2 className="text-xl font-black text-foreground">
            {step === "cart" ? "Seu Carrinho" : "Finalizar Pedido"}
          </h2>
          <button
            onClick={() => { setIsOpen(false); setStep("cart") }}
            className="p-2 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Fechar carrinho"
          >
            <Xmark className="w-5 h-5" />
          </button>
        </div>

        {/* Carrinho vazio */}
        {items.length === 0 && (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-muted-foreground px-6">
            <span className="text-6xl">🛒</span>
            <p className="text-lg font-semibold text-foreground">Seu carrinho esta vazio</p>
            <p className="text-sm text-center">Adicione pizzas e esfihas deliciosas para comecar seu pedido!</p>
          </div>
        )}

        {/* Step: Carrinho */}
        {items.length > 0 && step === "cart" && (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
              {items.map((item) => (
                <div key={item.name} className="flex items-center gap-3 bg-secondary rounded-2xl p-3 border border-border">
                  {/* Imagem */}
                  {item.image && (
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                  )}

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-foreground text-sm leading-tight truncate">{item.name}</p>
                    <p className="text-primary font-black text-base">{formatCurrency(item.priceValue * item.quantity)}</p>
                    <p className="text-muted-foreground text-xs">{item.price} / unidade</p>
                  </div>

                  {/* Controles */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => removeItem(item.name)}
                      className="p-1 text-muted-foreground hover:text-red-500 transition-colors"
                      aria-label="Remover item"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2 bg-background rounded-xl border border-border px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm font-black text-foreground w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Rodape carrinho */}
            <div className="px-6 py-5 border-t border-border shrink-0 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">Total</span>
                <span className="text-2xl font-black text-primary">{formatCurrency(total)}</span>
              </div>
              <button
                onClick={() => setStep("checkout")}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-black py-3.5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-primary/30 text-base"
              >
                Finalizar Pedido
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </>
        )}

        {/* Step: Checkout */}
        {items.length > 0 && step === "checkout" && (
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto flex flex-col">
            <div className="flex-1 px-6 py-4 flex flex-col gap-5">

              {/* Resumo rapido */}
              <div className="bg-secondary rounded-2xl p-4 border border-border">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">Resumo</p>
                {items.map((item) => (
                  <div key={item.name} className="flex justify-between text-sm py-0.5">
                    <span className="text-foreground">{item.quantity}x {item.name}</span>
                    <span className="text-muted-foreground">{formatCurrency(item.priceValue * item.quantity)}</span>
                  </div>
                ))}
                <div className="border-t border-border mt-2 pt-2 flex justify-between font-black text-foreground">
                  <span>Total</span>
                  <span className="text-primary">{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Nome */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-foreground">Seu Nome</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Joao Silva"
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Endereco */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-foreground">Endereco de Entrega</label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Rua, numero, bairro, complemento"
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Forma de pagamento */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-foreground">Forma de Pagamento</label>
                <div className="grid grid-cols-2 gap-2">
                  {(["pix", "dinheiro", "debito", "credito"] as PaymentMethod[]).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => { setPayment(method); setNeedsChange(false) }}
                      className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                        payment === method
                          ? "bg-primary border-primary text-white shadow-md shadow-primary/20"
                          : "bg-secondary border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      {PAYMENT_LABELS[method]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Troco - somente para dinheiro */}
              {payment === "dinheiro" && (
                <div className="flex flex-col gap-3 bg-secondary rounded-2xl p-4 border border-border">
                  <p className="text-sm font-bold text-foreground">Precisa de troco?</p>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setNeedsChange(true)}
                      className={`flex-1 py-2.5 rounded-xl border text-sm font-bold transition-all ${
                        needsChange ? "bg-primary border-primary text-white" : "bg-background border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      Sim
                    </button>
                    <button
                      type="button"
                      onClick={() => { setNeedsChange(false); setChangeFor("") }}
                      className={`flex-1 py-2.5 rounded-xl border text-sm font-bold transition-all ${
                        !needsChange ? "bg-primary border-primary text-white" : "bg-background border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      Nao
                    </button>
                  </div>

                  {needsChange && (
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-muted-foreground">Vou pagar com a nota de R$</label>
                      <input
                        type="number"
                        min={total}
                        value={changeFor}
                        onChange={(e) => setChangeFor(e.target.value)}
                        placeholder={`Ex: ${Math.ceil(total / 10) * 10}`}
                        className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Botoes rodape checkout */}
            <div className="px-6 py-5 border-t border-border shrink-0 flex flex-col gap-3">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-3.5 rounded-2xl transition-all active:scale-95 shadow-lg shadow-[#25D366]/30 text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12.004 2C6.479 2 2 6.479 2 12.004c0 1.765.463 3.423 1.268 4.87L2.05 21.95l5.227-1.194A9.966 9.966 0 0012.004 22C17.521 22 22 17.521 22 12.004 22 6.479 17.521 2 12.004 2zm0 18.18a8.174 8.174 0 01-4.17-1.146l-.299-.178-3.1.708.72-3.017-.195-.31A8.174 8.174 0 013.824 12c0-4.512 3.668-8.18 8.18-8.18s8.18 3.668 8.18 8.18-3.668 8.18-8.18 8.18z"/>
                </svg>
                Enviar Pedido pelo WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="w-full py-3 rounded-2xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 font-semibold text-sm transition-all"
              >
                Voltar ao Carrinho
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  )
}
