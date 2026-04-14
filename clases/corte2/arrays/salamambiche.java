class ListaClientes {
    // Clase para representar un cliente
    class Cliente {
        constructor(id, nombre, email) {
            this.id = id;
            this.nombre = nombre;
            this.email = email;
        }
    }

    constructor() {
        this.clientes = [];
    }

    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

    obtenerClientes() {
        return this.clientes;
    }

    eliminarCliente(id) {
        this.clientes = this.clientes.filter(c => c.id !== id);
    }

    buscarCliente(id) {
        return this.clientes.find(c => c.id === id);
    }
}

module.exports = ListaClientes;

