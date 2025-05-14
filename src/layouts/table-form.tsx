import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    ID: "INV001",
    Ad: "oyku",
    Soyad: "bickici",
    Email: "oykudogg1@gmail.com",
    Sifre: "Oyku.123",
    Durum: "Banka Transferi",
    OdemeYontemi: "Credit Card",
    CoinAdresi: "12345",
    Adres: "Hamidiye mah. Demirbudak sit.",
    Miktar: "250000TL",

  },
  {
    ID: "INV002",
    Ad: "Salih",
    Soyad: "Nevcanoglu",
    Email: "nevcanoglu@gmail.com",
    Sifre: "Salih.123",
    Durum: "Banka Transferi",
    OdemeYontemi: "IBAN",
    CoinAdresi: "54321",
    Adres: "Hamidiye mah. Demirbudak sit.",
    Miktar: "350000TL",
  },
  {
    ID: "INV003",
    Ad: "Bedirhan",
    Soyad: "Gul",
    Email: "bedrhan@gmail.com",
    Sifre: "Bedirhan.123",
    Durum: "Banka Transferi",
    OdemeYontemi: "Credit Card",
    CoinAdresi: "23456",
    Adres: "Hamidiye mah. Demirbudak sit.",
    Miktar: "450000TL",
  },
  
]

export function TableForm() {
  return (
    <Table>
      <TableCaption>Tablo Sonu</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead className="w-[100px]">Ad</TableHead>
          <TableHead className="w-[100px]">Soyad</TableHead>
          <TableHead className="w-[100px]">Email</TableHead>
          <TableHead className="w-[100px]">Sifre</TableHead>
          <TableHead>Durum</TableHead>
          <TableHead>Odeme Yontemi</TableHead>
          <TableHead>Coin Adresi</TableHead>
          <TableHead>Adres</TableHead>
          <TableHead className="text-right">Miktar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.ID}>
            <TableCell className="font-medium">{invoice.ID}</TableCell>
            <TableCell>{invoice.Ad}</TableCell>
            <TableCell>{invoice.Soyad}</TableCell>
            <TableCell>{invoice.Email}</TableCell>
            <TableCell>{invoice.Sifre}</TableCell>
            <TableCell>{invoice.Durum}</TableCell>
            <TableCell>{invoice.OdemeYontemi}</TableCell>
            <TableCell>{invoice.CoinAdresi}</TableCell>
            <TableCell>{invoice.Adres}</TableCell>
            <TableCell className="text-right">{invoice.Miktar}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

