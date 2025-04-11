import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { Header } from "@/components/shared/header";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { SortPopup } from "@/components/shared/sort-popup";
import { Title } from "@/components/shared/title";

export default function Home() {
  return (
    <main className="min-h-screen bg-white rounded-3xl">
      <Header />

      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
        <Container className="flex items-center justify-between ">
          <Categories />
          <SortPopup />
        </Container>
      </div>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title={"Пиццы"}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                ]}
                categoryId={1}
              />

              <ProductsGroupList
                title={"Комбо"}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                ]}
                categoryId={2}
              />

              <ProductsGroupList
                title={"Закуски"}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                  {
                    id: 2,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                  {
                    id: 3,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                  {
                    id: 4,
                    name: "Чизбургер-пицца",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0195adc9477c7941bf125d04e4018c2a.avif",
                    price: 550,
                    items: [{ price: 550 }, { price: 700 }],
                  },
                ]}
                categoryId={3}
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
