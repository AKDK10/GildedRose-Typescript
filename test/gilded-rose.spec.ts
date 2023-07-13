import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });


    it('should be the same as the golden record', function() {
        const gildedRose = new GildedRose([ new Item('Aged Brie', -5, 50),
        new Item('Aged Brie', 0, 0),
        new Item('Aged Brie', -1, 1),  
        new Item('Aged Brie', -1, 2),
        new Item('Aged Brie', 1, 1),
        new Item('Aged Brie', 2, 2),
        new Item('Aged Brie', 0, 2),
        new Item('Aged Brie', 3,50),
        new Item('Backstage passes', 4, 30),
        new Item('Backstage passes', 3, 40),
        new Item('Backstage passes', 1, 49),
        ]);

        const goldenRecord = [new Item('Aged Brie', -6, 50),
        new Item('Aged Brie', -1, 2),
        new Item('Aged Brie', -2, 3),  
        new Item('Aged Brie', -2, 4),
        new Item('Aged Brie', 0, 2),
        new Item('Aged Brie', 1, 3),
        new Item('Aged Brie', -1, 4),
        new Item('Aged Brie', 2, 50),
        new Item('Backstage passes', 3, 29),
        new Item('Backstage passes', 2, 39),
        new Item('Backstage passes', 0, 48),];

        const items = gildedRose.updateQuality();
        console.log("[");
        for(let item of items){
            console.log(`new Item(${item.name}, ${item.sellIn}, ${item.quality})`)
        }
        console.log("]");
        expect(items).to.deep.equal(goldenRecord);


        
    });

    


});
