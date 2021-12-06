import React from 'react';
import SearchComponent from "../components/SearchComponent"

class FoodBoxComponent extends React.Component {
    constructor(){
        super();
        this.state={
            items:[
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74-p3oWpuQhrHdHB20x-eIRy9ksOpkWlMsw&usqp=CAU",
                    name:"Apple",
                    cal:95
                },
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi94BSgqwm6Zzv7mx3DJWxYRWNUPC0gf3pOA&usqp=CAU",
                    name:"Banana",
                    cal:105
                },
                {
                    image:"https://www.telegraph.co.uk/multimedia/archive/01834/orange_1834038b.jpg",
                    name:"Orange",
                    cal:45
                },
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3F4wQ9Ezf5Y8VGhTDGVRRw8cYZJyRuANBpw&usqp=CAU",
                    name:"Grapes",
                    cal:55
                },
                {
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMW7OiCvEfO7mYou3iV4q3yZPgSGTnacnKw&usqp=CAU",
                    name:"Dates",
                    cal:282
                },
                {
                    image:"https://static.toiimg.com/thumb/59789125.cms?width=1200&height=900",
                    name:"Noodles",
                    cal:159
                },
                {
                    image:"https://www.verywellfit.com/thmb/iw5zx0u6RhuVL65h3sz5i9qaTd8=/1609x1072/filters:fill(FFDB5D,1)/Chocolate_Cropped-5c6b6f45c9e77c00014764d6.jpg",
                    name:"Chocolate",
                    cal:205
                },
                {
                    image:"https://www.cardiosmart.org/images/default-source/news-article-images/70545718.tmb-dtl-news-a.jpg?sfvrsn=b5c370e0_2",
                    name:"Milk",
                    cal:200
                },
                {
                    image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F04%2F30%2Fcashews.jpg&q=85",
                    name:"Cashews",
                    cal:120
                },
                {
                    image:"https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/5:4/w_2815,h_2252,c_limit/milk-bread.jpg",
                    name:"Bread",
                    cal:240
                }
            ]
        }
    }
    render() {

            return <SearchComponent details={this.state.items}/>

    }
}

export default FoodBoxComponent;