class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    itemCount() {
        return this.collection.length;
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        }
        if (pageIndex < this.pageCount() - 1) {
            return this.itemsPerPage;
        }
        return this.collection.length % this.itemsPerPage;
    }

    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.collection.length) {
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

// Example usage:
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(helper.pageCount());         // should == 2
console.log(helper.itemCount());         // should == 6
console.log(helper.pageItemCount(0));    // should == 4
console.log(helper.pageItemCount(1));    // should == 2
console.log(helper.pageItemCount(2));    // should == -1
console.log(helper.pageIndex(5));        // should == 1
console.log(helper.pageIndex(2));        // should == 0
console.log(helper.pageIndex(20));       // should == -1
console.log(helper.pageIndex(-10));      // should == -1
