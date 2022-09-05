function inventoryList() {
    let items = [
        {
            name: 'Vladimir'
          },
          {
            name: 'Andjela'
          },
          {
            name: 'Filip'
          }
    ]
    const add = (name) => {
        // check if the item already exists       
        const names = items.filter(item => item.name === name) 
        if (names.length === 0) {
            // Add the item to the list        
            items.push({
                name: name
            })
        }
    }
    const remove = (name) => {
        // Remove the item from the inventory list       
        items = items.filter(item => item.name !== name)
    }
    const getList = () => {
        // return all the items            
        return items
    }
    // return all the methods.    
    return {
        add,
        remove,
        getList
    }
}

console.log(inventoryList());