const camisetas = [
    {
    Titulo: "Neymar campeón Libertadores 2011",
    Precio: "$150.000",
    Image: "camisetas/camiseta ney.jpg",
    Alt: "Camiseta Neymar local campeón Libertadores 2011"
    },
    {
    Titulo: "Messi local Jugador campeón Leagues Cup 2023",
    Precio: "$180.000",
    Image: "camisetas/camisetamessiInter.jpg",
    Alt: "Camiseta Inter Miami local Jugador 2022/23"
    },
    {
    Titulo: "Independiente visitante 2016/17",
    Precio: "$50.000",
    Image: "camisetas/independientenegra.jpg",
    Alt: "Camiseta Independiente visitante 2016/17"
    },
    {
    Titulo: "Napoli visitante 2015/16",
    Precio: "$50.000",
    Image: "camisetas/camisetanapoli.jpg",
    Alt: "Camiseta Napoli visitante 2015/16"
    },
    {
    Titulo: "Sampdoria local 2014/15",
    Precio: "$45.000",
    Image: "camisetas/camisetaSampdoria.JPEG",
    Alt: "Camiseta Sampdoria local 2014/15"
    },
    {
    Titulo: "Independiente visitante 2023",
    Precio: "$57.000",
    Image: "camisetas/camisetacai2023.jpg",
    Alt: "Camiseta Independiente tercera equipación 2023/24"
    },
    {
    Titulo: "Buzo New York City 2020",
    Precio: "$75.000",
    Image: "camisetas/buzonyc.JPEG",
    Alt: "Buzo New York City 2020"
    },
    {
    Titulo: "Messi local campeón Mundial Qatar 2022",
    Precio: "$35.000",
    Image: "camisetas/Messi local campeón Mundial Qatar 2022.jpg",
    Alt: "Camiseta Messi local campeón Mundial Qatar 2022"
    },
    {
    Titulo: "Argentina Entrenamiento Tiro 23",
    Precio: "$20.000",
    Image: "camisetas/Argentina Entrenamiento Tiro 23.jpg",
    Alt: "Camiseta Argentina Entrenamiento Tiro 23"
    },
    {
    Titulo: "Independiente entrenamiento 2020",
    Precio: "$10.000",
    Image: "camisetas/Independiente entrenamiento 2020.jpg",
    Alt: "Camiseta Independiente entrenamiento 2020"
    },
    {
    Titulo: "Independiente tercera equipación 2014/15",
    Precio: "$15.000",
    Image: "camisetas/Independiente tercera equipación 2014-15.jpg",
    Alt: "Camiseta Independiente tercera equipación 2014/15"
    },
    {
    Titulo: "Sevilla local 2016/17",
    Precio: "$20.000",
    Image: "camisetas/Sevilla local 2016-17.jpg",
    Alt: "Camiseta Sevilla local 2016/17"
    },
    {
    Titulo: "Campera Independiente 2015",
    Precio: "$20.000",
    Image: "camisetas/Campera Independiente 2015.jpg",
    Alt: "Campera Independiente 2015"
    },
    {
    Titulo: "Billetera Real Madrid 2017",
    Precio: "$11.500",
    Image: "",
    Alt: "Billetera Real Madrid 2017"
    },
    {
    Titulo: "Bale local campeón UCL 2017/18 producto oficial",
    Precio: "$45.000",
    Image: "camisetas/Bale local campeón UCL 2017-18.jpg",
    Alt: "Camiseta Bale local campeón UCL 2017/18 producto oficial"
    },
    {
    Titulo: "Sergio Ramos tercera equipación campeón UCL 2013/14",
    Precio: "$45.000",
    Image: "camisetas/Sergio Ramos tercera equipación campeón UCL 2013-14.jpg",
    Alt: "Camiseta Sergio Ramos tercera equipación campeón UCL 2013/14"
    },
    {
    Titulo: "Real Madrid mujer segunda equipacion 2012/13",
    Precio: "$30.000",
    Image: "camisetas/Real Madrid mujer segunda equipacion 2012-13.jpg",
    Alt: "Camiseta Real Mdrid mujer segunda equipacion 2012/13"
    },
    {
    Titulo: "Independiente final Recopa Sudamericana 2018",
    Precio: "$30.000",
    Image: "camisetas/Independiente final Recopa Sudamericana 2018.jpg",
    Alt: "Camiseta Independiente final Recopa Sudamericana 2018"
    },
    {
    Titulo: "Kun Agüero Manchester City campeón Premier League 2011/12",
    Precio: "Coleccionable",
    Image: "",
    Alt: "Camiseta Kun Agüero Manchester City campeón Premier League 2011/12"
    },
    {
    Titulo: "Independiente campeón Sudamericana 2017",
    Precio: "Coleccionable",
    Image: "camisetas/Independiente campeón Sudamericana 2017.jpg",
    Alt: "Camiseta Independiente campeón Sudamericana 2017"
    },
    {
    Titulo: "Real Madrid local campeón Supercopa de Europa y Mundial de Clubes 2014/15",
    Precio: "Coleccionable",
    Image: "",
    Alt: "Camiseta Real Madrid local campeón Supercopa de Europa y Mundial de Clubes 2014/15"
    },
    {
    Titulo: "Buzo Los Angeles Galaxy 2020",
    Precio: "Coleccionable",
    Image: "",
    Alt: "Buzo Los Angeles Galaxy 2020"
    },
    {
    Titulo: "Short Independiente visitante 2023/24",
    Precio: "Coleccionable",
    Image: "",
    Alt: "Short Independiente visitante 2023/24"
    },
    {
    Titulo: "Real Madrid entrenamiento 2012/13",
    Precio: "$15.000",
    Image: "camisetas/Real Madrid entrenamiento 2012-13.jpg",
    Alt: "Camiseta Real Madrid entrenamiento 2012/13"
    },
    {
    Titulo: "Independiente edición especial 2017",
    Precio: "$15.000",
    Image: "camisetas/Independiente edición especial 2017.jpg",
    Alt: "Camiseta Independiente edición especial 2017"
    },
    {
    Titulo: "Arsenal Pre-Match 2014/15",
    Precio: "$12.500",
    Image: "camisetas/Arsenal Pre-Match 2014-15.jpg",
    Alt: "Camiseta Arsenal Pre-Match 2014/15"
    },
    {
    Titulo: "Short Independiente 2015",
    Precio: "$10.000",
    Image: "camisetas/Short Independiente 2015.jpg",
    Alt: "Short Independiente 2015"
    }
];

console.table(camisetas)

export const getCamisetas = () => {
    return new Promise((resolve, reject) => {
    if (camisetas.length === 0) {
        reject(new Error('No hay productos'));
    } else {
        resolve(camisetas);
    }
    });
};