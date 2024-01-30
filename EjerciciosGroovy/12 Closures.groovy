Closure printMessage = {name->
    println "Hola $name"
}

printMessage("David")
printMessage.call("David")

String image = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrX6b2A5JEonRjJ-0PWk5p1rnAihfPnKOh9NCRyZiMj_Wpmejf"
//String downloadFolder = System.getProperty('user.home') + File.separator + 'Desktop' + File.separator + 'closures'
String downloadFolder =  "/mnt/c/Users/david/Desktop/EjerciciosVarios/ejerciciosGroovy"

def downloadFile = {URL url, File file -> 
    url.withInputStream { is -> 
        println 'Comenando descarga'
        file.withOutputStream{os ->
            def bs = new BufferedOutputStream(os)
            bs << is
        }
        println 'Terminando la descarga del archivo'
    }
}

downloadFile(image.toURL(), new File(downloadFolder, 'bannerDemo.png'))
