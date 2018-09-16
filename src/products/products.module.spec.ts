import { ProductsModule } from "./products.module";

describe("Products.ModuleModule", () => {
  let productsModuleModule: ProductsModule;

  beforeEach(() => {
    productsModuleModule = new ProductsModule();
  });

  it("should create an instance", () => {
    expect(productsModuleModule).toBeTruthy();
  });
});
