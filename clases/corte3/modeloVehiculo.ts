    interface vehiculoConPlaca {
        readonly placa: string;
        marca: string;
        modelo: string;
    year: number;
        kilometraje: number;
    }
    const vehiculo1: vehiculoConPlaca = {
        placa: "ABC123",
        marca: "Toyota",
        modelo: "Corolla",
        year: 2020,
        kilometraje: 15000
    };
    const vehiculo2: vehiculoConPlaca = {
        placa: "XYZ789",
        marca: "Honda",
        modelo: "Civic",
        year: 2021,
        kilometraje: 12000
    };
    const vehiculo3: vehiculoConPlaca = {
        placa: "LMN456",
        marca: "Ford",
        modelo: "Focus",
        year: 2019,
        kilometraje: 20000
    };
    console.log(vehiculo1.placa);
    console.log(vehiculo2.marca);
    console.log(vehiculo3.year);