import tkinter as tk
from tkinter import ttk

def mostrar_pregunta_reinstatement():
    pregunta.config(text="Does the company offers reinstatement?")
    boton_si.config(state=tk.NORMAL, text="Yes", command=mostrar_reinstate_do_not_rewrite)
    boton_no.config(state=tk.NORMAL, text="Not", command=mostrar_pregunta_is_customer_vip)
    boton_restart.config(state=tk.DISABLED)

def mostrar_reinstate_do_not_rewrite():
    pregunta.config(text="Reinstate, Do not rewrite")
    boton_si.config(state=tk.DISABLED)
    boton_no.config(state=tk.DISABLED)
    boton_restart.config(state=tk.NORMAL, command=reiniciar_flujo)

def mostrar_pregunta_is_customer_vip():
    pregunta.config(text="Is Customer VIP?")
    boton_si.config(text="Yes", command=mostrar_rewrite_policy)
    boton_no.config(text="Not", command=mostrar_pregunta_multi_line_client)
    boton_restart.config(state=tk.NORMAL)

def mostrar_rewrite_policy():
    pregunta.config(text="Rewrite Policy")
    boton_si.config(state=tk.DISABLED)
    boton_no.config(state=tk.DISABLED)
    boton_restart.config(state=tk.NORMAL)

def mostrar_pregunta_multi_line_client():
    pregunta.config(text="Multi-Line Client NO prior Offence?")
    boton_si.config(text="Yes", command=mostrar_rewrite_policy)
    boton_no.config(text="Not", command=mostrar_pregunta_multi_line_client_with_prior)
    boton_restart.config(state=tk.NORMAL)

def mostrar_pregunta_multi_line_client_with_prior():
    pregunta.config(text="Multi-Line Client WITH prior Offence?")
    boton_si.config(text="Yes", command=mostrar_rewrite_with_eft_or_pay_in_full)
    boton_no.config(text="Not", command=mostrar_pregunta_monoline_no_prior_offence)
    boton_restart.config(state=tk.NORMAL)

def mostrar_rewrite_with_eft_or_pay_in_full():
    pregunta.config(text="Rewrite with EFT or pay in full")
    boton_si.config(state=tk.DISABLED)
    boton_no.config(state=tk.DISABLED)
    boton_restart.config(state=tk.NORMAL)

def mostrar_pregunta_monoline_no_prior_offence():
    pregunta.config(text="Monoline WITH NO prior offence?")
    boton_si.config(text="Yes", command=mostrar_rewrite_policy)
    boton_no.config(text="Not", command=mostrar_pregunta_monoline_multiple_offence)
    boton_restart.config(state=tk.NORMAL)

def mostrar_pregunta_monoline_multiple_offence():
    pregunta.config(text="Monoline WITH multiple Offence?")
    boton_si.config(text="Yes", command=mostrar_service_team_warning)
    boton_no.config(text="Not", command=mostrar_fin_del_flujo)
    boton_restart.config(state=tk.NORMAL)

def mostrar_service_team_warning():
    pregunta.config(text="Send ticket to Service Team. Warn Customer quote will take up to 1 week")
    boton_si.config(state=tk.DISABLED)
    boton_no.config(state=tk.DISABLED)
    boton_restart.config(state=tk.NORMAL)

def mostrar_fin_del_flujo():
    pregunta.config(text="End of Question Flow")
    boton_si.config(state=tk.DISABLED)
    boton_no.config(state=tk.DISABLED)
    boton_restart.config(state=tk.NORMAL)

def reiniciar_flujo():
    boton_si.config(state=tk.NORMAL, text="Yes", command=mostrar_pregunta_reinstatement)
    boton_no.config(state=tk.NORMAL, text="Not", command=mostrar_pregunta_reinstatement)
    boton_restart.config(state=tk.DISABLED,command=mostrar_pregunta_reinstatement)
    mostrar_pregunta_reinstatement()

# Crear una instancia de la ventana principal
ventana = tk.Tk()

# Personalizar la ventana
ventana.title("Question Flow Application")
ventana.geometry("400x400")  # Est

# Configurar estilo
style = ttk.Style()
style.configure("TFrame", background="black")
style.configure("TLabel", background="black", foreground="white")
style.configure("TButton", background="black", foreground="white")

# Marco principal
frame = ttk.Frame(ventana, style="TFrame")
frame.pack(pady=20)

# Etiqueta para mostrar la pregunta actual
pregunta = tk.Label(ventana, text="")
pregunta.pack()

# Botones para seleccionar la respuesta
boton_si = tk.Button(ventana, text="Yes", command=mostrar_pregunta_reinstatement)
boton_si.pack(side=tk.LEFT)
boton_no = tk.Button(ventana, text="Not", command=mostrar_pregunta_reinstatement)
boton_no.pack(side=tk.LEFT)
boton_restart = tk.Button(ventana, text="Restart", command=reiniciar_flujo)
boton_restart.pack(side=tk.RIGHT)
boton_restart.config(state=tk.DISABLED)

# Centrar los botones
frame.pack_configure(anchor="center")

# Iniciar el flujo de preguntas
mostrar_pregunta_reinstatement()

# Iniciar el bucle principal de la aplicación
ventana.mainloop()
