
class PaginationHelper {
    collection
    page_items

    constructor(collection, page_items) {
        this.collection = collection;
        this.page_items = page_items;
    }

    itemCount() {
        return this.collection.length;
    }
    pageCount(){
        return Math.ceil(this.collection.length / this.page_items)
    }
    pageItemCount(page_index) {
        if (page_index < 0 || page_index >= this.pageCount()) {
            return -1;
        }
        if (page_index < this.pageCount() - 1) {
            return this.page_items;
        }
        return this.collection.length % this.page_items;
    }
    pageIndex(index) {
        if (index < 0 || index >= this.collection.length) {
            return -1;
        }
        return Math.floor(index / this.page_items);
    }
}

let a = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10)
console.log(a.pageItemCount(0))