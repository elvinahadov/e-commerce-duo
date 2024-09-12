// import { getArrivals, getTopSeller } from "@/api/product";
// import SingleProduct from "@/components/layout/SingleProduct";
import HomeContainer from "@/container/homeContainer";

export default async function Home() {

// const newArrivalsPromise =   getArrivals();
// const topSellersPromise =   getTopSeller();


// const {newArrivals,topSeller} = await Promise.all([newArrivalsPromise,topSellersPromise])

// console.log(newArrivals,"newArrivals")
// console.log(topSeller,"topSeller")
  return (
    <main >
      <HomeContainer/>
    </main>
  );
}
