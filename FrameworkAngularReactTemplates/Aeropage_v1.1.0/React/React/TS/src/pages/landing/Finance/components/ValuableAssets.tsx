import { valuableAssets } from "../data"
import AssetCard from "./AssetCard"

const ValuableAssets = () => {
  return (
    <section id="assets" className="py-10 lg:py-20">
      <div className="container">
        <div className="flex items-end justify-center mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our Assets</span>
            <h2 className="text-4xl font-medium text-default-950 mt-4">Valuable Assets</h2>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {valuableAssets.map((asset, idx) => (
            <AssetCard asset={asset} key={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValuableAssets