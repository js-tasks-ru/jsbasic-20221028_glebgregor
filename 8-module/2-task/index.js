import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid{
  constructor(products) {
    this.products = products;
    this.filters = {};
    this.elem = this.render()
    this.ProductCard = 0;
    // this.rrr = (lll) =>{
    //   //как добавить свойство? Анналогично this.filters.push() для массива ;
    //   this.filters = {...lll};
    // }

  }

  updateFilter(filters){
    let arr = []

    for( let [key, value] of Object.entries(filters)){
      this.filters[key] = value
    }

    console.log('this.filters = ', this.filters)
    // if(Object.keys(this.filters).length > 0){
    //   for(let key in Object.keys(this.filters)){
    //     if(key === Object.keys(filters)[0]){
    //       this.filters[key] = filters[key];
    //       break;
    //     }
    //     else{
    //       this.rrr(filters);
    //     }
    //   }
    // }else{
    //   this.rrr(filters);
    // }

    let result = [];
    if(this.filters.noNuts === true){
      result = this.products.filter((item) =>{
        if(!item.nuts || item.nuts === false){
          return item;
        }
      })
      this.products = result;
      console.log('this.products =', this.products)
    } else if(this.filters.noNuts === false){
      this.filters = {}
      return this.renderProductItemElem(this.products);
    }
    if(this.filters.vegeterianOnly === true){
      result = this.products.filter((item) =>{
        if(item.vegeterian === true){
          return item;
        }
      })
      this.products = result;
    }
    else if(this.filters.vegeterianOnly === false){
      this.filters = {}
      return this.renderProductItemElem(this.products);
    }
    if( this.filters.maxSpiciness > 0 && this.filters.maxSpiciness <= 4){

      result = this.products.filter((item) =>{
        if(item.spiciness <= this.filters.maxSpiciness){
          return item;
        }
      })
      this.products = result;
    }
    else if(this.filters.maxSpiciness < 0 && this.filters.maxSpiciness > 4){
      this.filters = {}
      return this.renderProductItemElem(this.products);
    }
    if(this.filters.category){
      result = this.products.filter((item) =>{
        if(item.category === this.filters.category){
          return item;
        }
      })
      this.products = result;
    }
    else if(this.filters.category === ''){
      this.filters = {}
      return this.renderProductItemElem(this.products);
    }
    this.renderProductItemElem(this.products);

  }

  // updateFilter(filters){
  //   let arr = []
  //
  //   if(Object.keys(this.filters).length > 0){
  //       for(let key in Object.keys(this.filters)){
  //         if(key === Object.keys(filters)[0]){
  //           this.filters[key] = filters[key];
  //           break;
  //         }
  //         else{
  //           this.rrr(filters);
  //         }
  //       }
  //   }else{
  //     this.rrr(filters);
  //   }
  //     if(this.filters.noNuts === true){
  //       this.products.filter((item) =>{
  //         if(!item.nuts || item.nuts === false){
  //           arr.push(item)
  //         }
  //       })
  //       this.renderProductItemElem(arr);
  //     } else if(this.filters.noNuts === false){
  //       this.filters = {}
  //       return this.renderProductItemElem(this.products);
  //     }
  //     if(this.filters.vegeterianOnly === true){
  //       this.products.filter((item) =>{
  //         if(item.vegeterian === true){
  //           arr.push(item)
  //           this.filters.vegeterianOnly = true;
  //         }
  //       })
  //       this.renderProductItemElem(arr);
  //     }
  //     else if(this.filters.vegeterianOnly === false){
  //       this.filters = {}
  //       return this.renderProductItemElem(this.products);
  //     }
  //     if( this.filters.maxSpiciness > 0 && this.filters.maxSpiciness <= 4){
  //       this.products.filter((item) =>{
  //         if(item.spiciness <= this.filters.maxSpiciness){
  //           arr.push(item)
  //         }
  //       })
  //       this.renderProductItemElem(arr);
  //     }
  //     else if(this.filters.maxSpiciness < 0 || this.filters.maxSpiciness > 4){
  //       this.filters = {}
  //       return this.renderProductItemElem(this.products);
  //     }
  //     if(this.filters.category){
  //       this.products.filter((item) =>{
  //         if(item.category === this.filters.category){
  //           arr.push(item)
  //         }
  //       })
  //       this.renderProductItemElem(arr);
  //     }
  //     else if(this.filters.category === ''){
  //       this.filters = {}
  //       return this.renderProductItemElem(this.products);
  //     }
  //
  // }
  renderProductItemElem(arr){
    let productItem = this.elem.querySelector('.products-grid__inner')
    console.log('arr', arr)
    productItem.innerHTML = '';
    for(let i = 0; i < arr.length; i++){
      this.ProductCard = new ProductCard(arr[i])
      let productItemElem = this.ProductCard.elem;
      productItem.append(productItemElem)
    }
  }

  render(){

    this.elem = createElement(`
    <div class="products-grid">
        <div class="products-grid__inner">
            <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
        </div>
    </div>
    `)

    this.renderProductItemElem(this.products)

    return this.elem;
  }

}
