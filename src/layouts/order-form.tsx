

export function OrderForm({}: React.ComponentPropsWithoutRef<"form">) {

    return (
      <div className="w-full min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Coin Wallet</h1>
          <p className="text-lg text-gray-600">
            Toplam Bakiye: <span className="font-semibold text-black">1.25 BTC</span>
          </p>
        </header>
        <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
  className="bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700 transition"
  onClick={() => {
    window.open("https://www.creem.io/test/payment/prod_1k3mH4XItV7SM1ztrWXYkX", "_blank");
  }}
>
  Al
</button>

          <button className="bg-green-600 text-white rounded-xl py-3 hover:bg-green-700 transition">Sat</button>
          <button className="bg-orange-500 text-white rounded-xl py-3 hover:bg-orange-600 transition">Transfer Et</button>
        </section>
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Coin Gönder</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Coin Türü</label>
              <select className="w-full border rounded-lg px-4 py-2">
                <option>BTC</option>
                <option>ETH</option>
                <option>USDT</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Alıcı Adresi</label>
              <input type="text" className="w-full border rounded-lg px-4 py-2" placeholder="0x..." />
            </div>
            <div>
              <label className="block text-sm font-medium">Miktar</label>
              <input type="number" className="w-full border rounded-lg px-4 py-2" placeholder="0.00" />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Gönder
            </button>
          </form>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-4">Son İşlemler</h2>
          <ul className="space-y-3">
            <li className="flex justify-between border-b pb-2">
              <span>BTC gönderildi</span>
              <span className="text-gray-500 text-sm">10 May 2025</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>ETH alındı</span>
              <span className="text-gray-500 text-sm">8 May 2025</span>
            </li>
            <li className="flex justify-between">
              <span>USDT gönderildi</span>
              <span className="text-gray-500 text-sm">1 May 2025</span>
            </li>
          </ul>
        </section>

        <footer className="mt-10 text-sm text-gray-400 text-center">
          2FA aktif — Güvenliğiniz bizim için önemli
        </footer>
      </div>
    </div>
  );
};
