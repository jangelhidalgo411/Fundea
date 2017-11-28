var rutasWith = $(".rutasSections").width(),
    rutasMedidas = rutasWith/2,
    imgMedidas = (rutasMedidas/2)- 10;
    $(".rutas").height(rutasWith);
    $(".rutas-logo").width(rutasMedidas).height(rutasMedidas);
    $(".rutas-img").width(rutasMedidas).height(rutasMedidas);
    $(".rutas-h1").width(rutasMedidas).height(rutasMedidas);
    $(".rutas-img-contain").width(imgMedidas).height(imgMedidas).css("background-size","100%");
    