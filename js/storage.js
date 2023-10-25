let consolasPrimerInicio = [
	{
		id: "5f49fab9-3135-4676-a160-5c3fdbb1ae92",
		descripcion: "La batería electrónica Alesis Strike Pro Special Edition B-Stock es un kit de batería electrónica con características especiales que se encuentra en condición B-Stock.",
		titulo: "BATERIA ELECTRONICA ALESIS STRIKE PRO SPECIAL EDITION B-STOCK",
		precio: 100000.00,
		cuotas: "12 cuotas $10.000",
		imagen:
			"https://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/screenshot_14-451f71aa930b0320e716693795749392-640-0.png",
		categoria: "Baterias",
		fechaDeCreacion: "2020-11-12",
	},
	{
		id: "2e897bad-d4e4-413d-a515-ed95df9ad917",
		fechaDeCreacion: "2017-03-03",
		descripcion: "La guitarra eléctrica Jet Guitars JS450 QTBR es una Strato-caster con pastillas HSS que ofrece un sonido versátil y un diseño clásico.",
		titulo: "GUITARRA ELECTRICA JET GUITARS JS450",
		precio: 150000.00,
		cuotas: "12 cuotas $25.000",
		imagen:
			"https://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/img_20230803_1454385201-6d9cb77f3d7e4dc1a816910868652770-640-0.jpg",
		categoria: "Guitarras",
	},
	{
		id: "fc3025ec-f314-4b63-9765-1e8df3ee358a",
		descripcion:
			"perfecto para músicos que buscan versatilidad en un paquete compacto.",
		titulo: "UKULELE STAGG US80 SE SOPRANO CON EQ",
		fechaDeCreacion: "2020-11-10",
		precio: 70000.00,
		cuotas: "4 cuotas $20.000",
		imagen:
			"https://d3ugyf2ht6aenh.cloudfront.net/stores/969/083/products/stagg-ut70-021-a8cb624943afbf54d216014113677292-640-0.jpg",
		categoria: "Otros",
	},
];

let productos =
	JSON.parse(localStorage.getItem("productos")) || consolasPrimerInicio;

if (JSON.parse(localStorage.getItem("productos")) === null) {
	localStorage.setItem("productos", JSON.stringify(productos));
}

const userInicio = [
	{
		fullname: "Daniel",
		email: "admin@admin.com",
		id: "6",
		password: "admin",
		role: "ROLE_ADMIN",
	},
	{
		fullname: "Samantha Davis",
		email: "samantha.davis@example.com",
		id: "7",
		password: "alfabeta",
		role: "ROLE_CLIENT",
	},
	{
		fullname: "James Moore",
		email: "james.moore@example.com",
		id: "8",
		password: "alfabeta",
		role: "ROLE_CLIENT",
	},
	{
		fullname: "Isabella Taylor",
		email: "isabella.taylor@example.com",
		id: "9",
		password: "alfabeta",
		role: "ROLE_CLIENT",
	},
];

if (localStorage.getItem("users") === null) {
	localStorage.setItem("users", JSON.stringify(userInicio));
}