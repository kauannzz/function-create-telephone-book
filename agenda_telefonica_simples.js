
function createTelefoneBook(person, telephone){
    if (typeof person === 'string' && typeof telephone === 'number'){
        const contact = {
            person: person,
            telephone: telephone
        } 
        console.log(contact)
    } else {
        console.log('Erro.. ')
    }
}

createTelefoneBook('Kauan', 123456789)