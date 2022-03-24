import React from "react";
import './Table.css';


export class Table extends React.Component {
    generateButton(button) {
        return (
            <button onClick={(button) => this.view(button)} >{button}</button>
        )

    }

    displayButton() {
        let allButtons = [1, 2, 3, 4, 5, 6];
        return allButtons.map(eachButton => this.generateButton(eachButton));


        // document.getElementById("displayButton").innerHTML = allButtons;
    }
    // generateRow(data) {
    //     return (
    //         <tr>{data}</tr>
    //     )
    // }
    displayRow() {
        
        let myData={Name:'vicash',Age:24,Email:'vicashbaskargmail.com',id:20512}
        // {Name:'vicash',Age:24,Email:'vicashbaskargmail.com',id:20512}
        let myKeys=Object.keys(myData);
        return myKeys.map(each=>{        
            return this.generatedata(myData[each]);
        })
    }
    generateHeader(header) {
        return (
            <th>{header}</th>
        )
    }
    displayHeader(){
        let headers=['Name','Age','Email','id']  ;
        return headers.map(e=>this.generateHeader(e));
    }
    generatedata(content) {
        return (
            <td>{content}</td>
        )
    }
    
    view(pages) {
        alert(pages)
    }
    render() {
        return (

            <div>
                <div>{this.displayButton()}</div>
                <div>{this.displayHeader()}</div>
                
                <div>{this.displayRow()}</div>
                {/*                 
                <div className="pagination">
                    <button class="previous" onClick={()=>this.view("prev")} >  &laquo; Previous</button>
                    <button class="previous round" onClick={()=>this.view()}>  &#8249;</button>
                    <button class="active" onClick={()=>this.view(1)}>1</button>
                    <button onClick={()=>this.view(2)}>2</button>
                    <button onClick={()=>this.view(3)}>3</button>
                    <button onClick={()=>this.view(4)}>4</button>
                    <button onClick={()=>this.view(5)}>5</button>
                   <button class="next round" onClick={()=>this.view()}> &#8250;</button>
                    <button class="next" onClick={()=>this.view("next")}>  Next &raquo;</button>

                
                </div> */}
                {/* <div id="displayButton"></div> */}
{/* 
                <div>
                    <table >
                        <tr >
                            <th>Post</th>
                            <th>User Id</th>
                            <th>Name</th>
                            <th>Email Address</th>
                        </tr>
                        <tr>
                            <td>    </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div> */}
                <div id="selector">
                    <select name=" value per item" id="item">
                        <option value="5">5</option>
                        <option value="">10</option>
                        <option value="">15</option>
                        <option value="">20</option>
                        <option value="">25</option>
                        <option value="">30</option>
                    </select>
                </div>


            </div>

        )


    }
}



