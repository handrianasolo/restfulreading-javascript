export class Book{
    constructor (title, author, description, pages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = false;
    }

    readBook (page) {
            if  ( (page < 1) || (page > this.pages)) {
                return 0;
            }
            else if ( (page >= 1) && ( page < this.pages )) {
                this.currentPage = page;
                return 1;
            }
            else if ( page === this.pages) {
                this.currentPage = page;
                this.read = true;
                return 1;    
            }
        }
    };

    const livre1 = new Book ( "Le journal d'Anne Frank",
                            "Anne Frank",
                            "La jeune fille a tenu son journal du 12 juin 1942 au 1er Août 1944",
                            325, 50, false);
    const livre2 = new Book ( "Le club des 5 au cap des tempètes",
                                "Enid Blyton",
                                "Un bel été pour les 5",
                                186, 186, true);
    const livre3 = new Book ( "Le club des 5 au bord de la mer",
                                "Enid Blyton",
                                "Ferme isolée sur une falaise bretonne",
                              188, 100, false);
   
   
    export const books = [livre1, livre2, livre3];