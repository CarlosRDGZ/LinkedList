class LinkedList {
	/**
	 * Regresa una lista
	 * @constructor
	 */
	constructor () {
		/** @type {Product} */
		this.first = null
	}

	/**
	 * Agrega un producto al final de la lista
	 * @param {Product} node 
	 */
	add (node) {
    if (this.first === null)
      this.first = node
    else {
      let temp = this.first
      while (temp.next !== null)
        temp = temp.next
      temp.next = node
    }
	}
	
	/**
	 * Busca un produto por su codigo en la lista
	 * @param {String} code
	 * @returns {Product} null si no se encuentra
	 */
	search (code) {
    let temp = this.first
    while (temp !== null) {
      if (temp.code === code)
        return temp
      temp = temp.next
    }
    return null
  }

	/**
	 * Borra el producto cuyo codigo coicida con
	 * el que se pase como argumento
	 * @param {String} code
	 */
  delete (code) {
    if (this.first === null) return

    if (this.first.code === code) {
      const temp = this.first
			this.first = this.first.next
			return
    }

    let previous = this.first
    let current = this.first.next
    while (current !== null) {
      if (current.code === code) {
        const temp = current
        previous.next = current.next
        return
      }
      previous = current
      current = current.next
    }
  }

  reverse () {
		let previous = null
		let current = this.first
		let next = null

    while (current !== null) {
			next = current.next
			current.next = previous
			previous = current
			current = next
    }
    this.first = previous
	}
	
	/**
	 * Agrega un producto al inicio de la lista
	 * @param {Product} node 
	 */
	addAtBeginig (node) {
		if (this.first === null)
			this.first = node
		else {
			node.next = this.first
			this.first = node
		}
	}

	/** Elimina el primer elemento de la lista */
	deleteFirst () {
		if (this.first === null)
			return
		this.first = this.first.next
	}

	/** Elimina el ultimo elemento de la lista */
	deleteLast () {
		if (this.first === null)
      return
		let previous = null
		let current = this.first
		while (current.next !== null) {
			previous = current
			current = current.next
		}
		current = null
	}

	/**
	 * Lista los elementos del ultimo al primero
	 * @returns {String}
	 */
	toReverseArray () {
		let array = []
    let temp = this.first
    while (temp != null) {
      array.unshift(temp)
      temp = temp.next
    }
    return array
  }
  
  toArray() {
    let array = []
    let temp = this.first
    while (temp != null) {
      array.push(temp)
      temp = temp.next
    }
    return array
  }
}