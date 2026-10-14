
"use strict";

// Початковий масив бібліотеки
const library = [
    {
        title: "1984",
        author: "Джордж Орвелл",
        year: 1949,
        genre: "Дистопія",
        available: true
    },
    {
        title: "Гаррі Поттер і філософський камінь",
        author: "Дж. К. Ролінґ",
        year: 1997,
        genre: "Фентезі",
        available: false
    },
    {
        title: "Володар перснів",
        author: "Дж. Р. Р. Толкін",
        year: 1954,
        genre: "Фентезі",
        available: true
    },
    {
        title: "Код да Вінчі",
        author: "Ден Браун",
        year: 2003,
        genre: "Детектив",
        available: true
    },
    {
        title: "Маленький принц",
        author: "Антуан де Сент-Екзюпері",
        year: 1943,
        genre: "Філософія",
        available: false
    }
];

// 1. Додавання книги
function addBook(library, newBook) {
    library.push(newBook);
    console.log(`Книгу "${newBook.title}" додано.`);
}

// 2. Видалення книги за назвою
function removeBook(library, title) {
    const index = library.findIndex(
        book => book.title.toLowerCase() === title.toLowerCase()
    );

    if (index === -1) {
        console.log("Книга не знайдена.");
        return;
    }

    library.splice(index, 1);
    console.log(`Книгу "${title}" видалено.`);
}

// 3. Пошук книг за автором
function findBooksByAuthor(library, author) {
    const books = library.filter(
        book => book.author.toLowerCase().includes(author.toLowerCase())
    );

    if (books.length === 0) {
        console.log("Книги цього автора не знайдені.");
        return;
    }

    console.log(`Книги автора "${author}":`);

    books.forEach(book => {
        console.log(book.title + " (" + book.year + ")");
    });
}

// 4. Підрахунок кількості книг
const getTotalBooks = library => {
    console.log("Загальна кількість книг: " + library.length);
    return library.length;
};

// 5. Зміна статусу книги
function toggleAvailability(library, title) {
    const book = library.find(
        book => book.title.toLowerCase() === title.toLowerCase()
    );

    if (!book) {
        console.log("Книга не знайдена.");
        return;
    }

    book.available = !book.available;

    console.log(
        `Книга "${book.title}" тепер ${
            book.available ? "доступна" : "видана"
        }.`
    );
}

// 6. Виведення всіх книг
function showLibrary(library) {
    console.log("--- Список книг бібліотеки ---");

    library.forEach((book, index) => {
        console.log(
            `${index + 1}. ${book.title} | Автор: ${book.author} | ` +
            `Рік: ${book.year} | Жанр: ${book.genre} | ` +
            `Статус: ${book.available ? "доступна" : "видана"}`
        );
    });
}

// Демонстрація роботи програми
console.log("=== МЕНЕДЖЕР БІБЛІОТЕКИ ===");

showLibrary(library);

// Додаємо нову книгу
console.log("--- Додавання книги ---");

const newBook = {
    title: "Шерлок Холмс",
    author: "Артур Конан Дойл",
    year: 1887,
    genre: "Детектив",
    available: true
};

addBook(library, newBook);

// Пошук за автором
console.log("--- Пошук за автором ---");
findBooksByAuthor(library, "Дж. К. Ролінґ");

// Підрахунок книг
console.log("--- Кількість книг ---");
getTotalBooks(library);

// Зміна статусу
console.log("--- Зміна статусу ---");
toggleAvailability(library, "1984");

// Видалення книги
console.log("--- Видалення книги ---");
removeBook(library, "Код да Вінчі");

// Перевірка помилки
console.log("--- Перевірка помилки ---");
removeBook(library, "Невідома книга");

// Кінцевий список
console.log("--- Кінцевий список ---");
showLibrary(library);
getTotalBooks(library);
