import os
import xml.etree.ElementTree as ET
import openpyxl

# Ruta del directorio que contiene los archivos XML
directorio = "C:\\Users\\dvazquez\\Documents\\ProyectosTIMSA\\Certificados\\MyTempFolder2024"

# Función para extraer la información de un archivo XML
def extraer_informacion_xml(archivo):
    try:
        tree = ET.parse(archivo)
        root = tree.getroot()

        # Verificar si el Comprobante tiene el TipoDeComprobante "P"
        tipo_comprobante = root.attrib.get("TipoDeComprobante")
        if tipo_comprobante == "P":
            receptor = root.find("{http://www.sat.gob.mx/cfd/4}Receptor")
            receptor_nombre = receptor.attrib.get("Nombre")
            receptor_rfc = receptor.attrib.get("Rfc")

            totales = root.find(".//{http://www.sat.gob.mx/Pagos20}Totales")
            monto_total_pagos = totales.attrib.get("MontoTotalPagos")
            total_retenciones_iva = totales.attrib.get("TotalRetencionesIVA")
            total_traslados_base_iva16 = totales.attrib.get("TotalTrasladosBaseIVA16")
            total_traslados_impuesto_iva16 = totales.attrib.get("TotalTrasladosImpuestoIVA16")

            pago = root.find(".//{http://www.sat.gob.mx/Pagos20}Pago")
            fecha_pago = pago.attrib.get("FechaPago")
            forma_pago = pago.attrib.get("FormaDePagoP")
            moneda_pago = pago.attrib.get("MonedaP")
            monto_pago = pago.attrib.get("Monto")
            tipo_cambio_pago = pago.attrib.get("TipoCambioP")

            timbre = root.find(".//{http://www.sat.gob.mx/TimbreFiscalDigital}TimbreFiscalDigital")
            fecha_timbrado = timbre.attrib.get("FechaTimbrado")
            no_certificado_sat = timbre.attrib.get("NoCertificadoSAT")
            uuid = timbre.attrib.get("UUID")

            return {
                "TipoDeComprobante": tipo_comprobante,
                "Receptor_Nombre": receptor_nombre,
                "Receptor_RFC": receptor_rfc,
                "MontoTotalPagos": monto_total_pagos,
                "TotalRetencionesIVA": total_retenciones_iva,
                "TotalTrasladosBaseIVA16": total_traslados_base_iva16,
                "TotalTrasladosImpuestoIVA16": total_traslados_impuesto_iva16,
                "FechaPago": fecha_pago,
                "FormaDePagoP": forma_pago,
                "MonedaP": moneda_pago,
                "Monto": monto_pago,
                "TipoCambioP": tipo_cambio_pago,
                "FechaTimbrado": fecha_timbrado,
                "NoCertificadoSAT": no_certificado_sat,
                "UUID": uuid
            }
    except Exception as e:
        print(f"Error al procesar el archivo {archivo}: {e}")
        return None

# Lista para almacenar la información de todos los archivos XML
informacion_xml = []

# Iterar sobre todos los archivos en el directorio
for archivo in os.listdir(directorio):
    if archivo.endswith(".xml"):
        ruta_completa = os.path.join(directorio, archivo)
        informacion = extraer_informacion_xml(ruta_completa)
        if informacion:
            informacion_xml.append(informacion)

# Crear un nuevo archivo de Excel
archivo_excel = "informacion_cfdi.xlsx"
wb = openpyxl.Workbook()
hoja = wb.active

# Escribir encabezados
encabezados = ["Tipo de Comprobante", "Nombre Receptor", "RFC Receptor", "Monto Total Pagos", "Total Retenciones IVA", "Total Traslados Base IVA16", "Total Traslados Impuesto IVA16", "Fecha Pago", "Forma de Pago P", "Moneda P", "Monto", "Tipo Cambio P", "Fecha Timbrado", "No Certificado SAT", "UUID"]
hoja.append(encabezados)

# Escribir información en el archivo de Excel
for info in informacion_xml:
    fila = [
        info["TipoDeComprobante"],
        info["Receptor_Nombre"],
        info["Receptor_RFC"],
        info["MontoTotalPagos"],
        info["TotalRetencionesIVA"],
        info["TotalTrasladosBaseIVA16"],
        info["TotalTrasladosImpuestoIVA16"],
        info["FechaPago"],
        info["FormaDePagoP"],
        info["MonedaP"],
        info["Monto"],
        info["TipoCambioP"],
        info["FechaTimbrado"],
        info["NoCertificadoSAT"],
        info["UUID"]
    ]
    hoja.append(fila)

# Guardar el archivo de Excel
wb.save(archivo_excel)
print(f"La información se ha guardado exitosamente en '{archivo_excel}'.")
