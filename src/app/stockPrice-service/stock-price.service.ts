import { Injectable } from '@angular/core';
import {StockPrice} from '../stock-price';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockPriceService {

  public token: string = environment.token; 
  stockPrices: StockPrice;

  constructor(private http:HttpClient) { 
    this.stockPrices = new StockPrice("",0,"","","","");
    // this.repos = new Repos("","","",new Date())
    // this.gitUserError=false
  
  
  }

  getStockItems(item:any){
    interface ApiResponse{
      symbol:any;
      high:any;
      low:any;
      price:any;
      changePercent:any;
      description:any
      
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&"+item+"?access_token="+this.token).toPromise().then(getResponse=>{
        if(getResponse.symbol){
          this.stockPrices .symbol = getResponse.symbol;
        }
        else{
          this.stockPrices .symbol= '';
        }
        this.stockPrices.symbol = getResponse.symbol;
        this.stockPrices.high = getResponse.high;
        this.stockPrices.low = getResponse.low;
        this.stockPrices.price = getResponse.price;
        this.stockPrices.changePercent = getResponse.changePercent;
        this.stockPrices.description = getResponse.description;
       
        resolve;
      },error=>{
        this.stockPrices.symbol  = "IBM";
        this.stockPrices.high= 20.9575;
        this.stockPrices.low = 29.9578
        this.stockPrices.price = 40.95
        this.stockPrices.changePercent = 25+"%";
        this.stockPrices.description = "Apple";
       
        reject;
      });
    });
    return promise;
  }



      
    };
 

