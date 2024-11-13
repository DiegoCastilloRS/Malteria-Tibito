// Variable global para almacenar respuestas acumuladas
let accumulatedAnswers = [];

// Preguntas y puntajes
const questionsData = {
  "Recibo de Cebada": [
     { question: "1) Los pisos deben ser resistentes al desgaste satisfaciendo lo que el proceso mismo demanda y resisitir los métodos y materiales limpieza utilizados. Deben ser impermeables y mantenerse en buen estado. Deben estar libres de burbujas de pintura o baldosas sueltas que puedan albergar contaminación microbiológica. Deben estar visiblemente limpios y libres de malos olores o acumulación excesiva de biopelículas y escombros.", score: 10 },
     { question: "2) Los desagües están visiblemente limpios y libres de malos olores o acumulación excesiva de biopelículas y escombros (use linterna o flash).", score: 10 },
     { question: "3) Trampas de control de plagas deben estar correctamente etiquetados y colocados dentro de la planta en ambos lados de todas las puertas exteriores. Las trampas de feromonas y matamoscas eléctrico (EFK) se deben utilizar cuando sea necesario. No hay evidencia visible de aves, roedores o plagas de insectos, tales como plumas, pelo, orina, excrementos, alas de insectos, telas de araña, etc.", score: 10 },
     { question: "4) Las paredes y los techos deben ser construidas, terminadas y mantenidas para evitar la acumulación de suciedad, minimizar la condensación y el crecimiento de moho, y facilitar la limpieza. Las paredes interiores deben estar libres de signos de fugas anteriores no reparados, ingreso de humedad o condensación excesiva. Las paredes interiores no deben tener agujeros excesivos, grietas, pintura descascarada o acumulación de moho.", score: 10 },
     { question: "5) Hay iluminación suficiente y adecuada para el correcto funcionamiento de los procesos, la inspección del producto y la limpieza efectiva. Todas las luces son inastillables o bien cuentan con cubiertas protectoras, la iluminación es adecuada para proporcionar un entorno de trabajo seguro.", score: 10 },
     { question: "6) Equipo de producción (recipientes, válvulas, bombas, tuberías, etc.) exteriores están limpios y libres de acumulación visible de polvo, manchas, el moho y la suciedad en general.", score: 10 },
     { question: "7) Equipo de producción (válvulas, intercambiadores de calor, bombas, tuberías, instrumentos en linea, mirillas, válvulas de muestreo, etc.) están en buen estado y en general libres de fugas y otros defectos estructurales o funcionales.", score: 10 },
     { question: "8) Equipo de producción (recipientes, válvulas, bombas, tuberías, etc.) se limpian (CIP) a la frecuencia mínima requerida con el flujo adecuado (velocidad), el tiempo, la presión, la temperatura y la concentración química. Registros de limpieza / prueba de limpieza debe mantenerse durante un mínimo de 18 meses.", score: 10 },
     { question: "9) Equipos de limpieza no aptos para contacto con alimentos (productos químicos, cepillos, escobas, palas, etc.) se almacenan correctamente en armarios, estantes o ganchos, etiquetados como no-aptos para el contacto con los alimentos y se mantienen alejados de las herramientas de contacto con alimentos.", score: 10 },
     { question: "10) Herramientas de producción (cepillos, escobas, palas, etc.) utilizados para la limpieza de los recipientes de producción se guardan en armarios, estantes o ganchos, etiquetados como contacto con los alimentos y se mantienen alejados de las herramientas de contacto no alimentarios. Herramientas de producción están en buenas condiciones, y se reemplazan cuando estan defectuosas.", score: 10 },
     { question: "11) Vidrio u otros materiales quebradizos deben ser excluidos o protegidos contra la rotura en las zonas donde los productos abiertos se manipulen o existe el riesgo de contaminación del producto.", score: 10 },
     { question: "12) Todos los accesorios de producción (codos, reductores, juntas, empaques etc.) y las tuberias curvas deben ser limpiados en un baño desinfectante (totalmente sumergido) antes de ser colocado. El baño debe estar limpio y químicamente activo. Accesorios adicionales de producción y / o dispositivos de toma de muestras se guardan en armarios, estantes o ganchos y debidamente etiquetados segun 5S. Accesorios de producción están en buenas condiciones y limpias.", score: 10 },
     { question: "13) Los contenedores secundarios son almacenados y etiquetados para cumplir adecuadamente con los requisitos de inocuidad de los alimentos. Envases secundarios se mantienen limpios y libres de residuos. Todos los recipientes utilizados para la medición y dispensación de los adjuntos y auxiliares tecnológicos deben estar debidamente etiquetados o codificados por colores, y se lavan a fondo después de su uso antes de ser almacenado en un lugar limpio y seco. Contenedores etiquetados sólo se deben utilizar (o contienen materiales) como se indica en su etiqueta.", score: 10 },
     { question: "14) Mangueras de produccion (en contacto con alimentos) se almacenan fuera del piso, con ambos extremos tapados, en buenas condiciones y limpias.", score: 10 },
     { question: "15) Materiales a granel y equipos se almacenan una distancia mínima de 45 cm (18 pulgadas) de las paredes. Materiales a granel se almacenan fuera del piso, en paletas/estibas limpias, bastidores, gabinetes o estantes para facilitar la limpieza. Los recipientes abiertos se cierran y sellan correctamente cuando no estan en uso.", score: 10 },
     { question: "16) Debe proporcionarse una adecuada ventilación y extracción en areas de almacenamiento y de procesamiento de productos para evitar la condensación o polvo excesivo. El equipo utilizado para el movimiento del aire debe estar libre de polvo, fugas de aceite, tener rejillas articuladas funcionales, ser correctamente monitoreado y completamente funcionales. Los filtros ambientales deben ser utilizados según sea necesario y se sustituye de acuerdo a un cronograma definido.", score: 10 },
     { question: "17) Donde se hacen las reparaciones temporales, estas deben ser controladas para garantizar que la inocuidad o la legalidad de producto no se pone en peligro. Estas medidas temporales deben ser reparadas de forma permanente lo antes posible y dentro de plazos de dos semanas a menos que se documente y justifique otra cosa.", score: 10 },
     { question: "18) La madera no debe ser utilizada en áreas de productos abiertos, excepto cuando se trata de un requisito del proceso (por ejemplo, la maduración de los productos con madera). Cuando el uso de la madera no se puede evitar, la condición de la madera debe ser monitoreado continuamente para asegurarse de que está en buenas condiciones y libres de daños o astillas que puedan contaminar los productos.", score: 10 },
     { question: "19) Se requiere el control del uso de implementos afilados de metal, incluidos cuchillos, cuchillas de corte en equipos, agujas y hilos de corte. Cortadores/bisturis con hojas desprendibles no se deben utilizar.", score: 10 },
     { question: "20) Todos los materiales y equipos se almacenan fuera del piso en estibas limpias, bastidores o estantes.", score: 10 },
     { question: "21) Los productos de limpieza, lubricantes o cualquier otro contaminante / químico potencial se almacenan lejos del producto y tanques abiertos. Todos los productos químicos / lubricantes de grado alimenticio deben separarse de los productos químicos / lubricantes que no sean de grado alimenticio. Los productos e ingredientes químicos y de grado alimenticio no se pueden almacenar en la misma área / habitación donde es posible la contaminación cruzada.", score: 10 },
     { question: "22) Las puertas deben mantenerse en buenas condiciones. Las puertas exteriores deben cerrar adecuadamente, sin espacios. Las puertas exteriores que abren a áreas de producto expuesto no deben dejarse abiertas cuando no se utilizan de inmediato, excepto en caso de emergencia. Cuando haya puertas que abran a áreas de producto no expuesto, deben tomarse precauciones para prevenir el ingreso de plagas. Las puertas exteriores y / o cortinas de aire proporcionan una barrera adecuada contra roedores, aves y la entrada de insectos (funcional, sellado, en buen estado).", score: 10 },
     { question: "23) Equipo de medición se mantiene correctamente, limpio, calibrado según sea necesario y en buenas condiciones. Los registros de calibración se mantienen por 3 años mínimo.", score: 10 },
     { question: "24) Toda el agua utilizada en la planta que pueden ponerse en contacto con el producto o superficies de contacto con el mismo debe ser potable.", score: 10 },
     { question: "25) Las salas de control, estaciones de trabajo, oficinas, áreas de mantenimiento y laboratorios satélite deben cumplir con las 5S, artículos personales almacenados adecuadamente, estar libre de alimentos / bebidas (a menos que se realice una evaluación de riesgos y el lavado de manos esté disponible). Las reglas de distancia social y las rutinas de desinfección de las superficies están en en sitio.", score: 10 },
     { question: "26) La planta cuenta con un área designada para la segregación / aislamiento de material/productos no conformes según la política de bloqueo AB-InBev.", score: 10 },
     { question: "27) No hay piezas sueltas en la zona, por ejemplo: tornillos, o´rings, varillas de soldadura, etc.", score: 10 },
     { question: "28) No se observa exceso de lubricación en ningún equipo.", score: 10 },
     { question: "29) Todos los lotes de materiales entrantes son inspeccionados para verificar su identidad, el certificado de análisis, y que esté libre de daños por humedad, malos olores y / o infestación de plagas, y daños físicos. Se cumple FIFO para todos los materiales. Las fechas de caducidad, en su caso, deben ser visibles en la etiqueta.", score: 10 },
     { question: "30) Los camiones que se utilizan para el transporte de cebada se deben ocupar exclusivamente para el transporte de productos compatibles con alimentos y suministros.", score: 10 },
     { question: "31) Los camiones y furgones que se reciben con grano son inspeccionados para verificar que estén bien cerrados / sellados y sin signos de manipulación durante el envío. El sello numerado como evidencia de manipulación se valida con la documentación de embarque.", score: 10 },
     { question: "32) Las instalaciones/edificio de descarga de granos se mantienen cerradas en todo momento, excepto durante la entrada / salida de camiones / furgones con grano. las puertas de acceso y compuertas proporcionan una barrera adecuada contra la entrada de roedores, aves o insectos mientras están cerradas.", score: 10 },
     { question: "33) Los lotes de granos que se reciben son inspeccionados y documentados para verificar que estén libres de daños por humedad, malos olores y / o infestación de plagas antes de la descarga.", score: 10 },
     { question: "34) Los lotes de cebada son inspeccionados para verificar la ausencia de daños por moho, olores extraños y / o infestación de plagas antes de la descarga.", score: 10 },
     { question: "35) El área de descarga de la cebada se mantiene cerrada, excepto durante la entrada / salida de camiones, y las puertas / portones de acceso proporcionan una barrera adecuada contra la entrada de roedores, aves o insectos cuando están cerradas.", score: 10 },
     { question: "36) La zona de descarga de la cebada está limpia y ordenada, libre de basura, escombros y acumulación de polvo. La cebada derramada en el suelo se elimina rápidamente (limpiada) a fin de evitar atraer roedores, aves o insectos.", score: 10 },
     { question: "37) La descarga de la cebada debe llevarse a cabo en un lugar adecuado y debe existir un riesgo mínimo de contaminación procedente de las zonas circundantes, etc.", score: 10 },
     { question: "38) El sistema de descarga: rampas o pozos/canales, debe estar seco, suspendido para evitar la entrada de humedad, libre de grano en germinación, libre de moho, insectos, gusanos y pájaros, y capaz de estar cubierto.", score: 10 },
     { question: "39) El equipo para la limpieza, cribado/desgranado y clasificación de la cebada (aspiración, desbarbado, tamizado, desgranadora) debe funcionar correctamente y se limpia con regularidad.", score: 10 },
     { question: "40) Las mangueras de aire comprimido deben mantenerse organizadas en su soporte, con sus extremos fuera del contacto con el suelo.", score: 10 },
     { question: "41) El equipo de limpieza / clasificación de granos (tamiz, despedradora, imán, etc.) trabaja bien y se limpia con regularidad.", score: 10 },
     { question: "42) Baños y vestuarios de los empleados están limpios y completamente funcionales con carteles del procedimiento de lavado de manos en todos los baños.", score: 10 },
     { question: "43) Los lockers y armarios son de tamaño suficiente para dar cabida a los objetos personales y deben ser provistos para todo el personal que trabaja en las áreas de manipulación de materias primas, preparación, procesamiento, empaque y almacenamiento.", score: 10 },
     { question: "44) Las estaciones de lavado de manos, ubicadas por puntos de acceso de personal y en la proximidad de las áreas de procesamiento, se mantienen limpias y en pleno funcionamiento. Totalmente operativo se define como: (1) Suministro de agua potable, preferiblemente caliente en climas fríos donde el agua muy fría puede actuar como un elemento disuasorio para los empleados que se lavan las manos a fondo. (2) Sustancias efectivas para la limpieza y desinfección de las manos. (3) Servicio de toallas sanitarias o dispositivos de secado adecuados. (4) Señales fáciles de entender que indican a los empleados cómo se laven las manos.", score: 10 },
     { question: "45) Los vestuarios de los empleados están limpios y bien iluminados. La ropa de trabajo / uniformes / EPP deben ser almacenados por separado de la ropa personal.", score: 10 },
     { question: "46) Los empleados comprenden y cumplen las políticas de plantas respecto de Equipo de Protección Personal (EPP). Los EPP usados por los operadores en general se encuentran limpios y en buenas condiciones. Las mascarillas están limpias, en buen estado y se usan correctamente. No se comparte EPP entre los empleados y existe un procedimiento para desinfectar el EPP.", score: 10 },
     { question: "47) Todos los cortes y rasguños en la piel expuesta deben estar cubiertos por un apósito/banda de color apropiado que sea diferente del color del producto (preferiblemente azul). Estos deben ser emitidos y monitoreados por la compañía. Cuando sea apropiado, además del apósito/banda, se debe usar un guante.", score: 10 },
     { question: "48) La ropa y la higiene personal de los empleados (salud personal, ropa limpia, lavado de manos, uñas recortadas, cobertura / sujeción del cabello, sin perfume excesivo o solución excesiva para después del afeitado, etc.) reflejan su profesionalidad y comprensión de las BMP. Se sigue la política de joyas.", score: 10 },
     { question: "49) Los alimentos o bebidas, incluyendo goma de mascar y los dulces, nunca se introducen o se consumen en las áreas de producción, incluyendo las salas de control (comprobar los contenedores de basura para envolturas de dulces, bebidas, restos de comida, etc.). Solo está permitido el consumo de agua en recipientes de plástico en las áreas de producción.", score: 10 },
     { question: "50) Solo se fuma en las áreas designadas. No hay colillas de cigarrillos o cualquier otra evidencia de fumar en áreas no designadas. En estas áreas habilitadas debe haber carteles indicando el lavado de manos después de fumar. Se encuentran ceniceros u otras instalaciones adecuadas en el área de fumadores. No hay colillas de cigarrillos o cualquier otra evidencia de fumar en áreas no designadas.", score: 10 },
     { question: "51) Áreas asignadas a los contratistas están claramente marcadas, son seguras y se encuentran en buenas condiciones (si NO OK, el jefe de proyecto de la planta está involucrado). Esto incluye reglas de distanciamiento social y estaciones de lavado de manos.", score: 10 },
     { question: "52) Los contenedores/frascos no se vuelven a utilizar para cualquier fin que no sea su propósito original. En caso de necesidad de negocio, se debe tener una evaluación de riesgos documentada y las medidas necesarias implementadas para justificar la reutilización con seguridad de los contenedores (deberá ser aprobado por Calidad).", score: 10 }
],
  "Area de Malteo": [
   { question: "1) Los pisos deben ser resistentes al desgaste satisfaciendo lo que el proceso mismo demanda y resistir los métodos y materiales de limpieza utilizados. Deben ser impermeables y mantenerse en buen estado. Deben estar libres de burbujas de pintura o baldosas sueltas que puedan albergar contaminación microbiológica. Deben estar visiblemente limpios y libres de malos olores o acumulación excesiva de biopelículas y escombros.", score: 10 },
   { question: "2) Los desagües están visiblemente limpios y libres de malos olores o acumulación excesiva de biopelículas y escombros (use linterna o flash).", score: 10 },
   { question: "3) Trampas de control de plagas deben estar correctamente etiquetados y colocados dentro de la planta en ambos lados de todas las puertas exteriores. Las trampas de feromonas y matamoscas eléctrico (EFK) se deben utilizar cuando sea necesario. No hay evidencia visible de aves, roedores o plagas de insectos, tales como plumas, pelo, orina, excrementos, alas de insectos, telas de araña, etc.", score: 10 },
   { question: "4) Las paredes y los techos deben ser construidas, terminadas y mantenidas para evitar la acumulación de suciedad, minimizar la condensación y el crecimiento de moho, y facilitar la limpieza. Las paredes interiores deben estar libres de signos de fugas anteriores no reparados, ingreso de humedad o condensación excesiva. Las paredes interiores no deben tener agujeros excesivos, grietas, pintura descascarada o acumulación de moho.", score: 10 },
   { question: "5) Hay iluminación suficiente y adecuada para el correcto funcionamiento de los procesos, la inspección del producto y la limpieza efectiva. Todas las luces son inastillables o bien cuentan con cubiertas protectoras, la iluminación es adecuada para proporcionar un entorno de trabajo seguro.", score: 10 },
   { question: "6) Equipo de producción (recipientes, válvulas, bombas, tuberías, etc.) exteriores están limpios y libres de acumulación visible de polvo, manchas, el moho y la suciedad en general.", score: 10 },
   { question: "7) Equipo de producción (válvulas, intercambiadores de calor, bombas, tuberías, instrumentos en línea, mirillas, válvulas de muestreo, etc.) están en buen estado y en general libres de fugas y otros defectos estructurales o funcionales.", score: 10 },
   { question: "8) Equipo de producción (recipientes, válvulas, bombas, tuberías, etc.) se limpian (CIP) a la frecuencia mínima requerida con el flujo adecuado (velocidad), el tiempo, la presión, la temperatura y la concentración química. Registros de limpieza / prueba de limpieza deben mantenerse durante un mínimo de 18 meses.", score: 10 },
   { question: "9) Equipos de limpieza no aptos para contacto con alimentos (productos químicos, cepillos, escobas, palas, etc.) se almacenan correctamente en armarios, estantes o ganchos, etiquetados como no aptos para el contacto con los alimentos y se mantienen alejados de las herramientas de contacto con alimentos.", score: 10 },
   { question: "10) Herramientas de producción (cepillos, escobas, palas, etc.) utilizados para la limpieza de los recipientes de producción se guardan en armarios, estantes o ganchos, etiquetados como contacto con los alimentos y se mantienen alejados de las herramientas de contacto no alimentarios. Herramientas de producción están en buenas condiciones y se reemplazan cuando están defectuosas.", score: 10 },
   { question: "11) Vidrio u otros materiales quebradizos deben ser excluidos o protegidos contra la rotura en las zonas donde los productos abiertos se manipulen o exista el riesgo de contaminación del producto.", score: 10 },
   { question: "12) Todos los accesorios de producción (codos, reductores, juntas, empaques, etc.) y las tuberías curvas deben ser limpiados en un baño desinfectante (totalmente sumergido) antes de ser colocado. El baño debe estar limpio y químicamente activo. Accesorios adicionales de producción y/o dispositivos de toma de muestras se guardan en armarios, estantes o ganchos y debidamente etiquetados según 5S. Accesorios de producción están en buenas condiciones y limpias.", score: 10 },
   { question: "13) Los contenedores secundarios son almacenados y etiquetados para cumplir adecuadamente con los requisitos de inocuidad de los alimentos. Envases secundarios se mantienen limpios y libres de residuos. Todos los recipientes utilizados para la medición y dispensación de los adjuntos y auxiliares tecnológicos deben estar debidamente etiquetados o codificados por colores, y se lavan a fondo después de su uso antes de ser almacenado en un lugar limpio y seco. Contenedores etiquetados solo se deben utilizar (o contienen materiales) como se indica en su etiqueta.", score: 10 },
   { question: "14) Mangueras de producción (en contacto con alimentos) se almacenan fuera del piso, con ambos extremos tapados, en buenas condiciones y limpias.", score: 10 },
   { question: "15) Materiales a granel y equipos se almacenan a una distancia mínima de 45 cm (18 pulgadas) de las paredes. Materiales a granel se almacenan fuera del piso, en paletas/estibas limpias, bastidores, gabinetes o estantes para facilitar la limpieza. Los recipientes abiertos se cierran y sellan correctamente cuando no están en uso.", score: 10 },
   { question: "16) Debe proporcionarse una adecuada ventilación y extracción en áreas de almacenamiento y de procesamiento de productos para evitar la condensación o polvo excesivo. El equipo utilizado para el movimiento del aire debe estar libre de polvo, fugas de aceite, tener rejillas articuladas funcionales, ser correctamente monitoreado y completamente funcionales. Los filtros ambientales deben ser utilizados según sea necesario y se sustituye de acuerdo a un cronograma definido.", score: 10 },
   { question: "17) Donde se hacen las reparaciones temporales, estas deben ser controladas para garantizar que la inocuidad o la legalidad del producto no se pone en peligro. Estas medidas temporales deben ser reparadas de forma permanente lo antes posible y dentro de plazos de dos semanas a menos que se documente y justifique otra cosa.", score: 10 },
   { question: "18) La madera no debe ser utilizada en áreas de productos abiertos, excepto cuando se trata de un requisito del proceso (por ejemplo, la maduración de los productos con madera). Cuando el uso de la madera no se puede evitar, la condición de la madera debe ser monitoreada continuamente para asegurarse de que está en buenas condiciones y libres de daños o astillas que puedan contaminar los productos.", score: 10 },
   { question: "19) Se requiere el control del uso de implementos afilados de metal, incluidos cuchillos, cuchillas de corte en equipos, agujas y hilos de corte. Cortadores/bisturís con hojas desprendibles no se deben utilizar.", score: 10 },
   { question: "20) Todos los materiales y equipos se almacenan fuera del piso en estibas limpias, bastidores o estantes.", score: 10 },
   { question: "21) Los productos de limpieza, lubricantes o cualquier otro contaminante/químico potencial se almacenan lejos del producto y tanques abiertos. Todos los productos químicos/lubricantes de grado alimenticio deben separarse de los productos químicos/lubricantes que no sean de grado alimenticio. Los productos e ingredientes químicos y de grado alimenticio no se pueden almacenar en la misma área/habitación donde es posible la contaminación cruzada.", score: 10 },
   { question: "22) Las puertas deben mantenerse en buenas condiciones. Las puertas exteriores deben cerrar adecuadamente, sin espacios. Las puertas exteriores que abren a áreas de producto expuesto no deben dejarse abiertas cuando no se utilizan de inmediato, excepto en caso de emergencia. Cuando haya puertas que abran a áreas de producto no expuesto, deben tomarse precauciones para prevenir el ingreso de plagas. Las puertas exteriores y/o cortinas de aire proporcionan una barrera adecuada contra roedores, aves y la entrada de insectos (funcional, sellado, en buen estado).", score: 10 },
   { question: "23) Equipo de medición se mantiene correctamente, limpio, calibrado según sea necesario y en buenas condiciones. Los registros de calibración se mantienen por 3 años mínimo.", score: 10 },
   { question: "24) Toda el agua utilizada en la planta que puede ponerse en contacto con el producto o superficies de contacto con el mismo debe ser potable.", score: 10 },
   { question: "25) Las salas de control, estaciones de trabajo, oficinas, áreas de mantenimiento y laboratorios satélite deben cumplir con las 5S, artículos personales almacenados adecuadamente, estar libres de alimentos/bebidas (a menos que se realice una evaluación de riesgos y el lavado de manos esté disponible). Las reglas de distancia social y las rutinas de desinfección de las superficies están en sitio.", score: 10 },
   { question: "26) La planta cuenta con un área designada para la segregación/aislamiento de material/productos no conformes según la política de bloqueo AB-InBev.", score: 10 },
   { question: "27) No hay piezas sueltas en la zona, por ejemplo: tornillos, o'rings, varillas de soldadura, etc.", score: 10 },
   { question: "28) No se observa exceso de lubricación en ningún equipo.", score: 10 },
   { question: "29) Todos los lotes de materiales entrantes son inspeccionados para verificar su identidad, el certificado de análisis, y que esté libre de daños por humedad, malos olores y/o infestación de plagas, y daños físicos. Se cumple FIFO para todos los materiales. Las fechas de caducidad, en su caso deben ser visibles en la etiqueta.", score: 10 },
   { question: "30) El agua usada en la preparación debe ser potable.", score: 10 },
   { question: "31) Las válvulas, tuberías, equipos, etc. están en buenas condiciones y generalmente están libres de fugas y otros defectos estructurales o funcionales.", score: 10 },
   { question: "32) Los recipientes utilizados para la medición y distribución de materiales auxiliares/ayudas de proceso y los frascos de muestreo están correctamente etiquetados/con código de color, y se lavan a fondo después de su uso y antes de su almacenamiento en un lugar limpio y seco.", score: 10 },
   { question: "33) No hay restos de cebada/cereales en las escaleras o pasos peatonales.", score: 10 },
   { question: "34) El equipo está limpio y libre de fugas.", score: 10 },
   { question: "35) Hay equipo necesario para el proceso de limpieza que se encuentra sin acumulación de polvo de cebada.", score: 10 },
   { question: "36) Las mangueras deben estar organizadas y sus extremos no tocan el piso.", score: 10 },
   { question: "37) El sistema de succión de CO₂ debe estar limpio.", score: 10 },
   { question: "38) Las tinas de germinación deben estar limpias y libres de grano germinado.", score: 10 },
   { question: "39) Las máquinas deben estar limpias y libres de granos germinados. El equipo de dosificación de Ácido Giberélico está limpio.", score: 10 },
   { question: "40) El equipo y material de muestreo para análisis están limpios y debidamente etiquetados.", score: 10 },
   { question: "41) Las mangueras deben estar organizadas y sus extremos no tocan el piso (REPETIDO, inciso 36).", score: 10 },
   { question: "42) Las cámaras están limpias y no hay espreas tapadas.", score: 10 },
   { question: "43) Todos los ventiladores están limpios y sin fugas de aceite.", score: 10 },
   { question: "44) Libre de crecimiento de hongos.", score: 10 },
   { question: "45) Los equipos y herramientas utilizados para la cebada/malta, se utilizan únicamente para la cebada/malta.", score: 10 },
   { question: "46) Escaleras limpias.", score: 10 },
   { question: "47) El equipo de proceso está limpio, sin acumulación de polvo o malta verde.", score: 10 },
   { question: "48) Baños y vestuarios de los empleados están limpios y completamente funcionales con carteles del procedimiento de lavado de manos en todos los baños.", score: 10 },
   { question: "49) Los lockers y armarios son de tamaño suficiente para dar cabida a los objetos personales y deben ser provistos para todo el personal que trabaja en las áreas de manipulación de materias primas, preparación, procesamiento, empaque y almacenamiento.", score: 10 },
   { question: "50) Las estaciones de lavado de manos, ubicadas por puntos de acceso de personal y en la proximidad de las áreas de procesamiento, se mantienen limpias y en pleno funcionamiento. Totalmente operativo se define como: (1) Suministro de agua potable, preferiblemente caliente en climas fríos donde el agua muy fría puede actuar como un elemento disuasorio para los empleados que se lavan las manos a fondo. (2) Sustancias efectivas para la limpieza y desinfección de las manos. (3) Servicio de toallas sanitarias o dispositivos de secado adecuados. (4) Señales fáciles de entender que indican a los empleados cómo se laven las manos.", score: 10 },
   { question: "51) Los vestuarios de los empleados están limpios y bien iluminados. La ropa de trabajo/uniformes/EPP deben ser almacenados por separado de la ropa personal.", score: 10 },
   { question: "52) Los empleados comprenden y cumplen las políticas de plantas respecto de Equipo de Protección Personal (EPP). Los EPP usados por los operadores en general se encuentran limpios y en buenas condiciones. Las máscarillas están limpias, en buen estado y se usan correctamente. No se comparte EPP entre los empleados y existe un procedimiento para desinfectar el EPP.", score: 10 },
   { question: "53) Todos los cortes y rasguños en la piel expuesta deben estar cubiertos por un apósito/banda de color apropiado que sea diferente del color del producto (preferiblemente azul). Estos deben ser emitidos y monitoreados por la compañía. Cuando sea apropiado, además del apósito/banda, se debe usar un guante.", score: 10 },
   { question: "54) La ropa y la higiene personal de los empleados (salud personal, ropa limpia, lavado de manos, uñas recortadas, cobertura/sujeción del cabello, sin perfume excesivo o solución excesiva para después del afeitado, etc.) reflejan su profesionalidad y comprensión de las BMP. Se sigue la política de joyas.", score: 10 },
   { question: "55) Los alimentos o bebidas, incluyendo goma de mascar y los dulces, nunca se introducen o se consume en las áreas de producción, incluyendo las salas de control (comprobar los contenedores de basura para envolturas de dulces, bebidas, restos de comida, etc.). Sólo está permitido el consumo de agua en recipientes de plástico en las áreas de producción.", score: 10 },
   { question: "56) Solo se fuma en las áreas designadas. No hay colillas de cigarrillos o cualquier otra evidencia de fumar en áreas no designadas. En estas áreas habilitadas debe haber carteles indicando el lavado de manos después de fumar. Se encuentran ceniceros u otras instalaciones adecuadas en el área de fumadores. No hay colillas de cigarrillos o cualquier otra evidencia de fumar en áreas no designadas.", score: 10 },
   { question: "57) Áreas asignadas a los contratistas están claramente marcadas, son seguras y se encuentran en buenas condiciones (si NO OK, el jefe de proyecto de la planta está involucrado). Esto incluye reglas de distanciamiento social y estaciones de lavado de manos.", score: 10 },
   { question: "58) Los contenedores/frascos no se vuelven a utilizar para cualquier fin que no sea su propósito original. En caso de necesidad de negocio, se debe tener una evaluación de riesgos documentada y las medidas necesarias implementadas para justificar la reutilización con seguridad de los contenedores (deberá ser aprobado por Calidad).", score: 10 }
],
  "Almacenamiento": [
    { question: "1) Los pisos deben ser resistentes al desgaste satisfaciendo lo que el proceso mismo demanda y resistir los métodos y materiales de limpieza utilizados. Deben ser impermeables y mantenerse en buen estado. Deben estar libres de burbujas de pintura o baldosas sueltas que puedan albergar contaminación microbiológica. Deben estar visiblemente limpios y libres de malos olores o acumulación excesiva de biopelículas y escombros.", score: 10 },
    { question: "2) Los desagües están visiblemente limpios y libres de malos olores o acumulación excesiva de biopelículas y escombros (use linterna o flash).", score: 10 },
    { question: "3) Trampas de control de plagas deben estar correctamente etiquetados y colocados dentro de la planta en ambos lados de todas las puertas exteriores. Las trampas de feromonas y matamoscas eléctrico (EFK) se deben utilizar cuando sea necesario. No hay evidencia visible de aves, roedores o plagas de insectos, tales como plumas, pelo, orina, excrementos, alas de insectos, telas de araña, etc. (incluye la revisión de tableros eléctricos para constatar que no hay evidencias allí tampoco).", score: 10 },
    { question: "4) Las paredes y los techos deben ser construidas, terminadas y mantenidas para evitar la acumulación de suciedad, minimizar la condensación y el crecimiento de moho, y facilitar la limpieza. Las paredes interiores deben estar libres de signos de fugas anteriores no reparados, ingreso de humedad o condensación excesiva. Las paredes interiores no deben tener agujeros excesivos, grietas, pintura descascarada o acumulación de moho.", score: 10 },
    { question: "5) Hay iluminación suficiente y adecuada para el correcto funcionamiento de los procesos, la inspección del producto y la limpieza efectiva. Todas las luces son inastillables o bien cuentan con cubiertas protectoras, la iluminación es adecuada para proporcionar un entorno de trabajo seguro.", score: 10 },
    { question: "6) Equipo de producción (recipientes, válvulas, bombas, tuberías, etc.) exteriores están limpios y libres de acumulación visible de polvo, manchas, el moho y la suciedad en general.", score: 10 },
    { question: "7) Equipo de producción (válvulas, intercambiadores de calor, bombas, tuberías, instrumentos en línea, mirillas, válvulas de muestreo, etc.) están en buen estado y en general libres de fugas y otros defectos estructurales o funcionales.", score: 10 },
    { question: "8) Equipo de producción (recipientes, válvulas, bombas, tuberías, etc.) se limpian (CIP) a la frecuencia mínima requerida con el flujo adecuado (velocidad), el tiempo, la presión, la temperatura y la concentración química. Registros de limpieza/prueba de limpieza deben mantenerse durante un mínimo de 18 meses.", score: 10 },
    { question: "9) Equipos de limpieza no aptos para contacto con alimentos (productos químicos, cepillos, escobas, palas, etc.) se almacenan correctamente en armarios, estantes o ganchos, etiquetados como no aptos para el contacto con los alimentos y se mantienen alejados de las herramientas de contacto con alimentos.", score: 10 },
    { question: "10) Herramientas de producción (cepillos, escobas, palas, etc.) utilizados para la limpieza de los recipientes de producción se guardan en armarios, estantes o ganchos, etiquetados como contacto con los alimentos y se mantienen alejados de las herramientas de contacto no alimentarios. Herramientas de producción están en buenas condiciones y se reemplazan cuando están defectuosas.", score: 10 },
    { question: "11) Vidrio u otros materiales quebradizos deben ser excluidos o protegidos contra la rotura en las zonas donde los productos abiertos se manipulen o existe el riesgo de contaminación del producto.", score: 10 },
    { question: "12) Todos los accesorios de producción (codos, reductores, juntas, empaques, etc.) y las tuberías curvas deben ser limpiados en un baño desinfectante (totalmente sumergido) antes de ser colocado. El baño debe estar limpio y químicamente activo. Accesorios adicionales de producción y/o dispositivos de toma de muestras se guardan en armarios, estantes o ganchos y debidamente etiquetados según 5S. Accesorios de producción están en buenas condiciones y limpias.", score: 10 },
    { question: "13) Los contenedores secundarios son almacenados y etiquetados para cumplir adecuadamente con los requisitos de inocuidad de los alimentos. Envases secundarios se mantienen limpios y libres de residuos. Todos los recipientes utilizados para la medición y dispensación de los adjuntos y auxiliares tecnológicos deben estar debidamente etiquetados o codificados por colores, y se lavan a fondo después de su uso antes de ser almacenado en un lugar limpio y seco. Contenedores etiquetados sólo se deben utilizar (o contienen materiales) como se indica en su etiqueta.", score: 10 },
    { question: "14) Mangueras de producción (en contacto con alimentos) se almacenan fuera del piso, con ambos extremos tapados, en buenas condiciones y limpias.", score: 10 },
    { question: "15) Materiales a granel y equipos se almacenan una distancia mínima de 45 cm (18 pulgadas) de las paredes. Materiales a granel se almacenan fuera del piso, en paletas/estibas limpias, bastidores, gabinetes o estantes para facilitar la limpieza. Los recipientes abiertos se cierran y sellan correctamente cuando no están en uso.", score: 10 },
    { question: "16) Debe proporcionarse una adecuada ventilación y extracción en áreas de almacenamiento y de procesamiento de productos para evitar la condensación o polvo excesivo. El equipo utilizado para el movimiento del aire debe estar libre de polvo, fugas de aceite, tener rejillas articuladas funcionales, ser correctamente monitoreado y completamente funcionales. Los filtros ambientales deben ser utilizados según sea necesario y se sustituye de acuerdo a un cronograma definido.", score: 10 },
    { question: "17) Donde se hacen las reparaciones temporales, estas deben ser controladas para garantizar que la inocuidad o la legalidad de producto no se pone en peligro. Estas medidas temporales deben ser reparadas de forma permanente lo antes posible y dentro de plazos de dos semanas a menos que se documente y justifique otra cosa.", score: 10 },
    { question: "18) La madera no debe ser utilizada en áreas de productos abiertos, excepto cuando se trata de un requisito del proceso (por ejemplo, la maduración de los productos con madera). Cuando el uso de la madera no se puede evitar, la condición de la madera debe ser monitoreada continuamente para asegurarse de que está en buenas condiciones y libres de daños o astillas que puedan contaminar los productos.", score: 10 },
    { question: "19) Se requiere el control del uso de implementos afilados de metal, incluidos cuchillos, cuchillas de corte en equipos, agujas y hilos de corte. Cortadores/bisturís con hojas desprendibles no se deben utilizar.", score: 10 },
    { question: "20) Todos los materiales y equipos se almacenan fuera del piso en estibas limpias, bastidores o estantes.", score: 10 },
    { question: "21) Los productos de limpieza, lubricantes o cualquier otro contaminante/químico potencial se almacenan lejos del producto y tanques abiertos. Todos los productos químicos/lubricantes de grado alimenticio deben separarse de los productos químicos/lubricantes que no sean de grado alimenticio. Los productos e ingredientes químicos y de grado alimenticio no se pueden almacenar en la misma área/habitación donde es posible la contaminación cruzada.", score: 10 },
    { question: "22) Las puertas deben mantenerse en buenas condiciones. Las puertas exteriores deben cerrar adecuadamente, sin espacios. Las puertas exteriores que abren a áreas de producto expuesto no deben dejarse abiertas cuando no se utilizan de inmediato, excepto en caso de emergencia. Cuando haya puertas que abran a áreas de producto no expuesto, deben tomarse precauciones para prevenir el ingreso de plagas. Las puertas exteriores y/o cortinas de aire proporcionan una barrera adecuada contra roedores, aves y la entrada de insectos (funcional, sellado, en buen estado).", score: 10 },
    { question: "23) Equipo de medición se mantiene correctamente, limpio, calibrado según sea necesario y en buenas condiciones. Los registros de calibración se mantienen por 3 años mínimo.", score: 10 },
    { question: "24) Toda el agua utilizada en la planta que puede ponerse en contacto con el producto o superficies de contacto con el mismo debe ser potable.", score: 10 },
    { question: "25) Las salas de control, estaciones de trabajo, oficinas, áreas de mantenimiento y laboratorios satélite deben cumplir con las 5S, artículos personales almacenados adecuadamente, estar libres de alimentos/bebidas (a menos que se realice una evaluación de riesgos y el lavado de manos esté disponible). Las reglas de distancia social y las rutinas de desinfección de las superficies están en sitio.", score: 10 },
    { question: "26) La planta cuenta con un área designada para la segregación/aislamiento de material/productos no conformes según la política de bloqueo AB-InBev.", score: 10 },
    { question: "27) No hay piezas sueltas en la zona, por ejemplo: tornillos, o'rings, varillas de soldadura, etc.", score: 10 },
    { question: "28) No se observa exceso de lubricación en ningún equipo.", score: 10 },
    { question: "29) Todos los lotes de materiales entrantes son inspeccionados para verificar su identidad, el certificado de análisis, y que esté libre de daños por humedad, malos olores y/o infestación de plagas, y daños físicos. Se cumple FIFO para todos los materiales. Las fechas de caducidad, en su caso deben ser visibles en la etiqueta.", score: 10 },
    { question: "30) No hay restos de cebada en el piso.", score: 10 },
    { question: "31) Silos y transportadores en buenas condiciones de limpieza.", score: 10 },
    { question: "32) Cualquier silo que contenga cebada bloqueada, debe ser limpiado antes de su reutilización.", score: 10 },
    { question: "33) Los silos de cebada/cereales y los equipos utilizados en el manejo de granos están libres de la acumulación de polvo y están debidamente construidos y mantenidos de manera que se impide la entrada de humedad.", score: 10 },
    { question: "34) El área de Silos está generalmente limpia y sin evidencia visible de infestación de pájaros, roedores o insectos, tales como telarañas, plumas, pelo, orina, heces, etc.", score: 10 },
    { question: "35) La planta tiene un área designada para la segregación/aislamiento de material no conforme y los 'Productos bloqueados' están claramente marcados y asegurados de acuerdo con el procedimiento de bloqueo de VPO.", score: 10 },
    { question: "36) No hay restos de cebada en el suelo. Los silos están cerrados e identificados.", score: 10 },
    { question: "37) Silos y transportadores en buenas condiciones de limpieza.", score: 10 },
    { question: "38) Los silos de almacenamiento de cereales y otros equipos de manejo de granos están libres de la acumulación excesiva de polvo y están adecuadamente construidos y mantenidos, para evitar la entrada de humedad.", score: 10 },
    { question: "39) Los Silos y sus alrededores están generalmente limpios y no hay evidencia visible de infestación de aves, roedores o insectos, tales como plumas, pelo, orina, heces o excrementos, telas de araña, etc.", score: 10 },
    { question: "40) Baños y vestuarios de los empleados están limpios y completamente funcionales con carteles del procedimiento de lavado de manos en todos los baños.", score: 10 },
    { question: "41) Los lockers y armarios son de tamaño suficiente para dar cabida a los objetos personales y deben ser provistos para todo el personal que trabaja en las áreas de manipulación de materias primas, preparación, procesamiento, empaque y almacenamiento.", score: 10 },
    { question: "42) Las estaciones de lavado de manos, ubicadas por puntos de acceso de personal y en la proximidad de las áreas de procesamiento, se mantienen limpias y en pleno funcionamiento. Totalmente operativo se define como: (1) Suministro de agua potable, preferiblemente caliente en climas fríos donde el agua muy fría puede actuar como un elemento disuasorio para los empleados que se lavan las manos a fondo. (2) Sustancias efectivas para la limpieza y desinfección de las manos. (3) Servicio de toallas sanitarias o dispositivos de secado adecuados. (4) Señales fáciles de entender que indican a los empleados cómo se laven las manos.", score: 10 },
    { question: "43) Los vestuarios de los empleados están limpios y bien iluminados. La ropa de trabajo/uniformes/EPP deben ser almacenados por separado de la ropa personal.", score: 10 },
    { question: "44) Los empleados comprenden y cumplen las políticas de plantas respecto de Equipo de Protección Personal (EPP). Los EPP usados por los operadores en general se encuentran limpios y en buenas condiciones. Las mascarillas están limpias, en buen estado y se usan correctamente. No se comparte EPP entre los empleados y existe un procedimiento para desinfectar el EPP.", score: 10 },
    { question: "45) Todos los cortes y rasguños en la piel expuesta deben estar cubiertos por un apósito/banda de color apropiado que sea diferente del color del producto (preferiblemente azul). Estos deben ser emitidos y monitoreados por la compañía. Cuando sea apropiado, además del apósito/banda, se debe usar un guante.", score: 10 },
    { question: "46) La ropa y la higiene personal de los empleados (salud personal, ropa limpia, lavado de manos, uñas recortadas, cobertura/sujeción del cabello, sin perfume excesivo o solución excesiva para después del afeitado, etc.) reflejan su profesionalidad y comprensión de las BPM. Se sigue la política de joyas.", score: 10 },
    { question: "47) Los alimentos o bebidas, incluyendo goma de mascar y los dulces, nunca se introducen o se consume en las áreas de producción, incluyendo las salas de control (comprobar los contenedores de basura para envolturas de dulces, bebidas, restos de comida, etc.). Sólo está permitido el consumo de agua en recipientes de plástico en las áreas de producción.", score: 10 },
    { question: "48) Solo se fuma en las áreas designadas. No hay colillas de cigarrillos o cualquier otra evidencia de fumar en áreas no designadas. En estas áreas habilitadas debe haber carteles indicando el lavado de manos después de fumar. Se encuentran ceniceros u otras instalaciones adecuadas en el área de fumadores. No hay colillas de cigarrillos o cualquier otra evidencia de fumar en áreas no designadas.", score: 10 },
    { question: "49) Áreas asignadas a los contratistas están claramente marcadas, son seguras y se encuentran en buenas condiciones (si NO OK, el jefe de proyecto de la planta está involucrado). Esto incluye reglas de distanciamiento social y estaciones de lavado de manos.", score: 10 },
    { question: "50) Los contenedores/frascos no se vuelven a utilizar para cualquier fin que no sea su propósito original. En caso de necesidad de negocio, se debe tener una evaluación de riesgos documentada y las medidas necesarias implementadas para justificar la reutilización con seguridad los contenedores (deberá ser aprobado por Calidad).", score: 10 }
]
  
};
let currentSection = '';
let selectedMonth = ''; // Variable para almacenar el mes seleccionado
let userName = ''; // Variable para almacenar el nombre del usuario

// Función del nombre
function submitName() {
  const nameInput = document.getElementById("userNameInput").value.trim();
  if (nameInput === "") {
    alert("Por favor, ingresa tu nombre y apellido.");
    return;
  }

  userName = nameInput; // Guarda el nombre del usuario
  fadeOut(document.getElementById("nameMenu"), () => {
    fadeIn(document.getElementById("menu"));
  });
  createDownloadAndResetButtons(); // Asegurarse de que los botones se añadan cuando se muestra el menú
}

// Función para abrir sección y manejar si tiene cuestionario o mostrar popup
function openSection(section) {
  currentSection = section;
  document.getElementById("resultContainer").style.display = "none"; // Ocultar contenedor de resultados al abrir una nueva sección
  if (questionsData[section]) {
    // Si la sección tiene preguntas, mostrar el menú de meses
    fadeOut(document.getElementById("menu"), () => {
      fadeIn(document.getElementById("monthMenu"));
    });
  } else {
    // Si no hay preguntas, mostrar popup de función en desarrollo
    showPopup("Opción en desarrollo");
  }
}

// Función para mostrar popup
function showPopup(message) {
  const popup = document.getElementById("popup");
  document.getElementById("popupMessage").innerText = message;
  fadeIn(popup);
}

// Función para manejar la selección de un mes
function selectMonth(month) {
  selectedMonth = month;
  fadeOut(document.getElementById("monthMenu"), () => {
    fadeIn(document.getElementById("questionnaire"));
    document.getElementById("sectionTitle").innerText = `${currentSection} - ${month}`; // Actualizar título
    loadQuestions(currentSection);
  });
}

// Cargar preguntas y asociar eventos de cambio
function loadQuestions(section) {
  const container = document.getElementById("questionsContainer");
  container.innerHTML = '';

  if (questionsData[section]) {
    questionsData[section].forEach((item, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.style.marginBottom = "50px"; // Añadir margen para separación entre preguntas
      questionDiv.innerHTML = `
        <p>${item.question}</p>
        <label><input type="radio" name="q${index}" value="OK" onchange="setScore(${index})"> OK</label>
        <label><input type="radio" name="q${index}" value="Para mejorar" onchange="setScore(${index})"> Para mejorar</label>
        <label><input type="radio" name="q${index}" value="NO OK" onchange="setScore(${index})"> NO OK</label>
        <div id="textInputContainer${index}" style="display:none; margin-top: 20px;">
          <label for="textInput${index}">Agregue la Acción:</label><br>
          <textarea id="textInput${index}" name="textInput${index}" rows="3" style="width: 100%; margin-top: 10px;"></textarea>
        </div>
      `;
      container.appendChild(questionDiv);
    });
  } else {
    console.error("Section not found in questionsData:", section);
    showPopup("Error: la sección seleccionada no contiene preguntas.");
  }
}

function setScore(index) {
  const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
  if (selectedOption) {
    const scoreMap = {
      "OK": 10,
      "Para mejorar": 5,
      "NO OK": 0
    };
    questionsData[currentSection][index].score = scoreMap[selectedOption.value] || 0;
    
    // Mostrar u ocultar el cuadro de texto según la opción seleccionada
    if (selectedOption.value === "NO OK") {
      toggleTextInput(index, true); // Mostrar cuadro de texto
    } else {
      toggleTextInput(index, false); // Ocultar cuadro de texto
    }
  }
}

// Función para calcular el PRP Score y mostrarlo
function calculatePRPScore() {
  const actualScore = questionsData[currentSection].reduce((sum, item) => sum + item.score, 0);
  const totalPossibleScore = questionsData[currentSection].length * 10; // Asumiendo que cada pregunta tiene un puntaje máximo de 10
  const prpScore = ((actualScore / totalPossibleScore) * 100).toFixed(2);

  alert(`PRP SCORE = ${prpScore}`);
  const resultContainer = document.getElementById("resultContainer");
  resultContainer.innerHTML = `<p>PRP Score: ${prpScore}%</p>`;
}

// Función para mostrar/ocultar el cuadro de texto
function toggleTextInput(index, show) {
  const textInputContainer = document.getElementById(`textInputContainer${index}`);
  if (show) {
    textInputContainer.style.display = 'block';
  } else {
    textInputContainer.style.display = 'none';
  }
}

// Función para cerrar pop-up
function closePopup() {
  fadeOut(document.getElementById("popup"));
}

// Función para regresar al menú principal
function returnToMainMenu() {
  fadeOut(document.getElementById("monthMenu"), () => {
    fadeIn(document.getElementById("menu"));
  });
  document.getElementById("resultContainer").style.display = "none";
  createDownloadAndResetButtons();
}

// Función para regresar al menú desde el cuestionario
function returnToMenu() {
  fadeOut(document.getElementById("questionnaire"), () => {
    fadeIn(document.getElementById("menu"));
  });
  document.getElementById("resultContainer").style.display = "none";
  createDownloadAndResetButtons();
}

// Función para enviar respuestas, calcular puntaje y mostrar resultado
async function submitAnswers() {
  if (!userName) {
    alert("Nombre no encontrado. Por favor, ingresa tu nombre y apellido.");
    return;
  }

  const response = [];
  let totalScore = 0;

  questionsData[currentSection].forEach((item, index) => {
    const answer = document.querySelector(`input[name="q${index}"]:checked`);
    let comment = "";
    let score = 0;

    if (answer) {
      if (answer.value === "OK") score = 10;
      else if (answer.value === "Para mejorar") score = 5;
      else if (answer.value === "NO OK") {
        score = 0;
        const textInput = document.getElementById(`textInput${index}`);
        if (textInput && textInput.value.trim() !== "") {
          comment = textInput.value.trim();
        }
      }
    }

    totalScore += score;

    response.push({
      question: item.question,
      answer: answer ? answer.value : "No respondida",
      score: score,
      comment: comment
    });
  });

  const dataToSend = { userName, section: currentSection, month: selectedMonth, response };

  try {
    const result = await fetch('https://seguridad-alimentaria-pr-ea9c4-default-rtdb.firebaseio.com/saveResponses.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend)
    });

    if (result.ok) {
      calculatePRPScore();
      const resultContainer = document.getElementById("resultContainer");
      resultContainer.innerHTML = `<h2>Puntaje PRP: ${totalScore}</h2>`;
      document.getElementById("questionnaire").style.display = "none";
      resultContainer.style.display = "block";
    } else {
      const errorMessage = await result.text();
      alert(`Hubo un problema al guardar las respuestas: ${errorMessage}`);
    }
  } catch (error) {
    console.error("Error al guardar las respuestas:", error);
    alert("Error de conexión. No se pudo guardar la información.");
  }

  returnToMenu();
}

function fadeIn(element) {
  element.style.opacity = 0;
  element.style.display = 'block';
  setTimeout(() => {
    element.style.transition = 'opacity 0.5s ease-in-out';
    element.style.opacity = 1;
  }, 10);
}

function fadeOut(element, callback) {
  element.style.transition = 'opacity 0.5s ease-in-out';
  element.style.opacity = 0;
  setTimeout(() => {
    element.style.display = 'none';
    if (callback) callback();
  }, 500);
}

// Función para descargar respuestas acumuladas en CSV desde la API
async function downloadAccumulatedAnswers() {
  try {
    const response = await fetch('https://seguridad-alimentaria-pr-ea9c4-default-rtdb.firebaseio.com/saveResponses.json');
    if (!response.ok) {
      throw new Error('Error al obtener las respuestas.');
    }

    const data = await response.json();

    if (!data || Object.keys(data).length === 0) {
      alert("No hay respuestas acumuladas para descargar.");
      return;
    }

    // Construir el CSV
    let csvContent = "Nombre,Sección,Mes,Pregunta,Respuesta,Score,Acciones\n";
    Object.values(data).forEach(({ userName, section, month, response }) => {
      if (response) {
        response.forEach(({ question, answer, score, comment }) => {
          const escapedQuestion = question.replace(/"/g, '""');
          const escapedAnswer = answer.replace(/"/g, '""');
          const escapedComment = comment.replace(/"/g, '""');
          csvContent += `"${userName}","${section}","${month}","${escapedQuestion}","${escapedAnswer}",${score || ''},"${escapedComment}"\n`;
        });
      }
    });

    // Crear el archivo CSV y activar la descarga
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "respuestas_acumuladas.csv";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  } catch (error) {
    console.error("Error al descargar las respuestas:", error);
    alert("Hubo un problema al descargar las respuestas. Inténtalo de nuevo.");
  }
}

// Crear botones de descarga y reinicio en el menú
function createDownloadAndResetButtons() {
  const menu = document.getElementById("menu");

  if (document.getElementById("downloadButton") && document.getElementById("resetButton")) return;

  const downloadButton = document.createElement("button");
  downloadButton.id = "downloadButton";
  downloadButton.innerText = "⬇️ Descargar Resultados";
  downloadButton.className = "button";
  downloadButton.onclick = downloadAccumulatedAnswers;
  menu.appendChild(downloadButton);

  const resetButton = document.createElement("button");
  resetButton.id = "resetButton";
  resetButton.innerText = "Reiniciar Nombre";
  resetButton.className = "button";
  resetButton.onclick = resetUser;
  resetButton.style.marginLeft = "10px";
  menu.appendChild(resetButton);
}

function resetUser() {
  userName = '';
  fadeOut(document.getElementById("menu"), () => {
    fadeIn(document.getElementById("nameMenu"));
  });
}

window.onload = function() {
  createDownloadAndResetButtons();
};
