def date = new Date()
def date2 = new Date().parse("dd.MMM.yyyy HH:mm:ss", "26.Sep.1980 12:34:45")

println date
println date.format("dd/MM/yyyy")
println date.format("dd/MMM/yyyy")
println date.format("dd/MMM/yyyy HH:mm:ss")
println date2

println "*********Manipulacion de Fechas***********"

def initial = date2.clone()
def dayBefore = date2 -1
def dayAfter = date2 + 1

println initial
println dayBefore
println dayAfter

//assert initial.after(dayAfter)  //Lo comento para poder continuar ya que genera una exception

println date[Calendar.YEAR]
println date[Calendar.MONTH]
println date[Calendar.DATE]

List months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"]

println """ Hoy es ${date[Calendar.DATE]} de ${months[date[Calendar.MONTH]]} del anio ${date[Calendar.YEAR]} """