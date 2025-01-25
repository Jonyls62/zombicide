import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';

// Configura Cloudinary con tus credenciales
cloudinary.config({
    cloud_name: 'dbzam0tvg', 
    api_key: '874649737425595', 
    api_secret: 'OqSRQ56jyvlVkcty9uvGgp9CV34' 
});

// Función para obtener las URLs y guardarlas en un archivo JSON
async function obtenerUrls() {
  try {
    // Obtén las imágenes de Cloudinary
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 500, // Ajusta este número según cuántas imágenes quieras obtener
    });

    // Extrae las URLs y asigna IDs incrementales
    const imageData = result.resources.map((image, index) => ({
      id: index + 1, // ID incremental empezando desde 1
      url: image.url
    }));

    // Guarda los datos en un archivo JSON
    fs.writeFileSync('imagenes.json', JSON.stringify(imageData, null, 2), 'utf8');
    console.log('Las URLs de las imágenes han sido guardadas en "imagenes.json".');
  } catch (error) {
    console.error('Error al obtener las imágenes:', error);
  }
}

// Llama a la función
obtenerUrls();
