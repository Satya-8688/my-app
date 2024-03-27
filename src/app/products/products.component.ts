import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public isEdit:boolean=false;
  public i:number=0;
  public products : any=[
    {name:'pen', price:10,rating:"3",freeDelivery:true,},
    {name:'phone', price:'200',rating:'2',freeDelivery:false,},
    {name:'shirt', price:'400',rating:'4',freeDelivery:true,},
    {name:'cap', price:'200',rating:'5',freeDelivery:false,},
    {name:'mobilecase', price:'300',rating:'2',freeDelivery:true,},
    {name:'remote', price:'100',rating:'2.5',freeDelivery:false,}

  ]


  pricelowtohigh(){
    this.products= this.products.sort((a:any,b:any)=>a.price-b.price)
  }
  pricehightolow(){
    this.products= this.products.sort((a:any,b:any)=>b.price-a.price)
  }
  ratinglowtohigh(){
    this.products= this.products.sort((a:any,b:any)=>a.rating-b.rating)
  }
  ratinghightolow(){
    this.products= this.products.sort((a:any,b:any)=>b.rating-a.rating)
  }
  applydiscount(){
    this.products = this.products.map((product:any)=>{
      product.price = product.price/2;
      return product
    });
  }
  deliverycharge(){
    this.products = this.products.map((product:any)=>{
      product.price+=30;
      return product;
    })

  }
  totalprice(){
    var sum = this.products.reduce((sum:any, product:any)=>sum+product.price,0)
    alert(sum)
  }
  totalcart(){
    var len = this.products.length;
    alert(len)
  }
  delete( i:number){
    this.products.splice(i,1);
  }

  public product:any={name:'', price:'0',rating:'0',freeDelivery:'false'};

  create(){
    this.products.push({...this.product});
    alert('created successfully');
    this.product.name='';
    this.product.price='';
    this.product.rating='';
    this.product.freeDelivery=''

  }
  update(selectedproduct:any,i:number){
    this.isEdit=true;
    this.i=i;
    this.product={...selectedproduct};
  }
  edit(){
    this.products.splice(this.i,1,{...this.product});
  }

}





  




