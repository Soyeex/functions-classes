// Задание 1

class Library {
    #books;

    constructor(initialBooks = []) {
        
        const uniqueBooks = Array.from(new Set(initialBooks));
        if (uniqueBooks.length !== initialBooks.length) {
            throw new Error("Дубликаты не допускаются!");
        }
        this.#books = uniqueBooks;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error("Такое название уже есть!");
        }
        this.#books.push(title);
    }

    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error("Книга с таким названием не найдена!");
        }
        this.#books.splice(index, 1);
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}


try {
    const library = new Library(["1984", "Мастера и Маргарита", "Гарри Поттер"]);
    console.log(library.allBooks); 

    library.addBook("Убить пересмешника");
    console.log(library.allBooks); 

    library.removeBook("1984");
    console.log(library.allBooks); 

    console.log(library.hasBook("Гарри Поттер")); 
    console.log(library.hasBook("1984")); 
} catch (error) {
    console.error(error.message);
}
