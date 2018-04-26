function List() {
  self = {}
  self.first = null

  self.add = function(node) {
    if (this.first === null)
      this.first = node
    else {
      let temp = this.first
      while (temp.next !== null)
        temp = temp.next
      temp.next = node
    }
  }
  
  self.search = function(value) {
    let temp = this.first
    while (temp !== null) {
      if (temp.value === value)
        return temp
      temp = temp.next
    }
    return null
  }

  self.delete = function(value) {
    if (this.first === null) return null

    if (this.first.value === value) {
      const temp = this.first
      this.first = this.first.next
      return temp
    }

    let previous = this.first
    let current = this.first.next
    if (current === null) return null

    while (current !== null) {
      if (current.value === value) {
        const temp = current
        previous.next = current.next
        return temp
      }
      previous = current
      current = current.next
    }
    return null
  }

  self.inverse = function() {
    let current = this.first
    
    if (current === null) return
    if (current.next === null) return
    
    let list = null
    let slice = null
    while (current !== null) {
      let next = current.next
      if (next !== null) {
        slice = next.next
        next.next = current
        current.next = list
        list = next
        current = slice
      } else {
        current.next = list
        list = current
        current = next
      }
    }
    this.first = list
  }

  self.toArray = function() {
    let temp = this.first, array = []
    while (temp !== null) {
      let str = ''
      for (let prop in temp)
        if (prop !== 'next')
          str += `${prop}: ${temp[prop]},`
      array.push(`{ ${str} }`)
      temp = temp.next
    }
    return array
  }
  return self
}