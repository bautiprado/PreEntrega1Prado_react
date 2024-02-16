import { Category } from "@mui/icons-material";

const camisetas = [
    {
    Id: 1,
    Titulo: "Neymar campeón Libertadores 2011",
    Precio: "$150.000",
    Image: "/camisetas/camiseta ney.jpg",
    Alt: "Camiseta Neymar local campeón Libertadores 2011",
    Category: "indumentaria"
    },
    {
    Id: 2,
    Titulo: "Messi local Jugador campeón Leagues Cup 2023",
    Precio: "$180.000",
    Image: "/camisetas/camisetamessiInter.jpg",
    Alt: "Camiseta Inter Miami local Jugador 2022/23",
    Category: "indumentaria"
    },
    {
    Titulo: "Independiente visitante 2016/17",
    Precio: "$50.000",
    Image: "/camisetas/independientenegra.jpg",
    Alt: "Camiseta Independiente visitante 2016/17",
    Category: "indumentaria"
    },
    {
    Titulo: "Napoli visitante 2015/16",
    Precio: "$50.000",
    Image: "/camisetas/camisetanapoli.jpg",
    Alt: "Camiseta Napoli visitante 2015/16",
    Category: "indumentaria"
    },
    {
    Titulo: "Sampdoria local 2014/15",
    Precio: "$45.000",
    Image: "/camisetas/camisetaSampdoria.JPEG",
    Alt: "Camiseta Sampdoria local 2014/15",
    Category: "indumentaria"
    },
    {
    Titulo: "Independiente visitante 2023",
    Precio: "$57.000",
    Image: "/camisetas/camisetacai2023.jpg",
    Alt: "Camiseta Independiente tercera equipación 2023/24",
    Category: "indumentaria"
    },
    {
    Titulo: "Buzo New York City 2020",
    Precio: "$75.000",
    Image: "/camisetas/buzonyc.JPEG",
    Alt: "Buzo New York City 2020",
    Category: "indumentaria"
    },
    {
    Titulo: "Messi local campeón Mundial Qatar 2022",
    Precio: "$130.000",
    Image: "/camisetas/camisetamessi.jpg",
    Alt: "Camiseta Messi local campeón Mundial Qatar 2022",
    Category: "selecciones"
    },
    {
    Titulo: "Argentina Entrenamiento Tiro 23",
    Precio: "$50.000",
    Image: "/camisetas/camisetaargtreino.jpg",
    Alt: "Camiseta Argentina Entrenamiento Tiro 23",
    Category: "selecciones"
    },
    {
    Titulo: "Independiente entrenamiento 2020",
    Precio: "$30.000",
    Image: "/camisetas/caitreino.jpg",
    Alt: "Camiseta Independiente entrenamiento 2020",
    Category: "ofertas"
    },
    {
    Titulo: "Independiente tercera equipación 2014/15",
    Precio: "$35.000",
    Image: "/camisetas/independientenegra.jpg",
    Alt: "Camiseta Independiente tercera equipación 2014/15",
    Category: "ofertas"
    },
    {
    Titulo: "Sevilla local 2016/17",
    Precio: "$40.000",
    Image: "/camisetas/camisetasevilla.jpg",
    Alt: "Camiseta Sevilla local 2016/17",
    Category: "ofertas"
    },
    {
    Titulo: "Campera Independiente 2015",
    Precio: "$40.000",
    Image: "/camisetas/camperarojo.JPEG",
    Alt: "Campera Independiente 2015",
    Category: "ofertas"
    },
    {
    Titulo: "Billetera Real Madrid 2017",
    Precio: "$20.500",
    Image: "/camisetas/BilleteraReal.JPEG",
    Alt: "Billetera Real Madrid 2017",
    Category: "ofertas"
    },
    {
    Titulo: "Bale local campeón UCL 2017/18 producto oficial",
    Precio: "$75.000",
    Image: "/camisetas/camisetabale.jpg",
    Alt: "Camiseta Bale local campeón UCL 2017/18 producto oficial",
    Category: "novedades y destacados"
    },
    {
    Titulo: "Sergio Ramos tercera equipación campeón UCL 2013/14",
    Precio: "$90.000",
    Image: "/camisetas/camisetasergioramos.jpg",
    Alt: "Camiseta Sergio Ramos tercera equipación campeón UCL 2013/14",
    Category: "novedades y destacados"
    },
    {
    Titulo: "Real Madrid mujer segunda equipacion 2012/13",
    Precio: "$60.000",
    Image: "/camisetas/camisetaMadridfemenina2012.JPEG",
    Alt: "Camiseta Real Mdrid mujer segunda equipacion 2012/13",
    Category: "novedades y destacados"
    },
    {
    Titulo: "Independiente final Recopa Sudamericana 2018",
    Precio: "$30.000",
    Image: "/camisetas/camisetaRecopa2018.jpg",
    Alt: "Camiseta Independiente final Recopa Sudamericana 2018",
    Category: "novedades y destacados"
    },
    {
    Titulo: "Kun Agüero Manchester City campeón Premier League 2011/12",
    Precio: "Coleccionable",
    Image: "/camisetas/camisetakun.jpg",
    Alt: "Camiseta Kun Agüero Manchester City campeón Premier League 2011/12",
    Category: "colección"
    },
    {
    Titulo: "Independiente campeón Sudamericana 2017",
    Precio: "Coleccionable",
    Image: "/camisetas/camisetaindependiente.jpg",
    Alt: "Camiseta Independiente campeón Sudamericana 2017",
    Category: "colección"
    },
    {
    Titulo: "Real Madrid local campeón Supercopa de Europa y Mundial de Clubes 2014/15",
    Precio: "Coleccionable",
    Image: "/camisetas/camisetareal2015.JPEG",
    Alt: "Camiseta Real Madrid local campeón Supercopa de Europa y Mundial de Clubes 2014/15",
    Category: "colección"
    },
    {
    Titulo: "Buzo Los Angeles Galaxy 2020",
    Precio: "Coleccionable",
    Image: "/camisetas/buzogalaxy.JPEG",
    Alt: "Buzo Los Angeles Galaxy 2020",
    Category: "colección"
    },
    {
    Titulo: "Short Independiente visitante 2023/24",
    Precio: "Coleccionable", 
    Image: "/camisetas/Shortrojo.JPEG",
    Alt: "Short Independiente visitante 2023/24",
    Category: "colección"
    },
    {
    Titulo: "Real Madrid entrenamiento 2012/13",
    PrecioOriginal: "$500",
    Precio: "$80.000",
    Image: "/camisetas/camisetamadridtreino.jpg",
    Alt: "Camiseta Real Madrid entrenamiento 2012/13",
    Category: "extra 50% off sale"
    },
    {
    Titulo: "Independiente edición especial 2017",
    Precio: "$80.000",
    Image: "/camisetas/independienteblanca.jpg",
    Alt: "Camiseta Independiente edición especial 2017",
    Category: "extra 50% off sale"
    },
    {
    Titulo: "Arsenal Pre-Match 2014/15",
    Precio: "$50.000",
    Image: "/camisetas/camisetaArsenal.JPEG",
    Alt: "Camiseta Arsenal Pre-Match 2014/15",
    Category: "extra 50% off sale"
    },
    {
    Titulo: "Short Independiente 2015",
    Precio: "$40.000",
    Image: "/camisetas/Shortrojo.JPEG",
    Alt: "Short Independiente 2015",
    Category: "extra 50% off sale"
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

export const getCamisetaById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                camisetas.find((camiseta) => camiseta.id.toString() === id.toString())
            );
        }, 1000);
    });
};

export const getCamisetasByCategory = (Category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(camisetas.filter((camiseta) => camiseta.Category === Category));
        }, 1000);
    });
};