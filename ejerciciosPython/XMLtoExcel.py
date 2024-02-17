 import os
import pandas as pd
import xml.etree.ElementTree as ET

# Define la ruta de la carpeta que contiene los archivos XML
carpeta_xml = "C:\\Users\\dvazquez\\Documents\\ProyectosTIMSA\\Certificados\\MyTempFolder2024"

# Lista para almacenar los datos de los XML
datos_xml = []

# Recorre los archivos XML en la carpeta
for archivo_xml in os.listdir(carpeta_xml):
    if archivo_xml.endswith(".xml"):
        ruta_xml = os.path.join(carpeta_xml, archivo_xml)
        
        # Analiza el archivo XML
        tree = ET.parse(ruta_xml)
        root = tree.getroot()
        
        # Extrae los datos necesarios
        no_certificado = root.get("NoCertificado")
        serie = root.get("Serie")
        folio = root.get("Folio")
        fecha = root.get("Fecha")
        subtotal = root.get("SubTotal")
        moneda = root.get("Moneda")
        tipo_cambio = root.get("TipoCambio")
        total = root.get("Total")
        
        # Busca el receptor en el XML
        receptor = root.find(".//{http://www.sat.gob.mx/cfd/4}Receptor")
        nombre_receptor = receptor.get("Nombre")
        rfc_receptor = receptor.get("Rfc")
        
        # Busca el complemento en el XML
        complemento = root.find(".//{http://www.sat.gob.mx/cfd/4}Complemento")
        carta_porte = complemento.find(".//{http://www.sat.gob.mx/CartaPorte30}CartaPorte")
        id_ccp = carta_porte.get("IdCCP") if carta_porte is not None else None
        
        # Encuentra el timbre fiscal digital
        timbre_fiscal = complemento.find(".//{http://www.sat.gob.mx/TimbreFiscalDigital}TimbreFiscalDigital")
        uuid = timbre_fiscal.get("UUID")
        
        # Agrega los datos a la lista
        datos_xml.append({"NoCertificado": no_certificado, "Serie": serie, "Folio": folio, "Fecha": fecha,
                          "SubTotal": subtotal, "Moneda": moneda, "TipoCambio": tipo_cambio,
                          "Total": total, "NombreReceptor": nombre_receptor, "RfcReceptor": rfc_receptor,
                          "IdCCP": id_ccp, "UUID": uuid})

# Crea un DataFrame de pandas con los datos
df = pd.DataFrame(datos_xml)

# Guarda los datos en un archivo Excel
df.to_excel("datos_facturas.xlsx", index=False)