import EPagination from "@/explication/EPagination.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function Explication() {
  return (
    <div className="relative w-[5715px] h-[1808px] bg-[#f7f5f9]">
      <EPagination pageCount={3} className="absolute top-[134px] left-[225px] w-auto" />
      <EPagination pageCount={10} className="absolute top-[134px] left-[883px] w-auto" />
      <div className="absolute top-[310px] left-[92px] w-[1271px] h-[662px] bg-[#2d2b2f]" />
      <Button size="size3" variant="variant3" className="absolute top-[387px] left-[1806px]">найти билеты</Button>
      <Button size="size3" variant="variant3" className="absolute top-[387px] left-[2252px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">найти билеты</Button>
      <Button size="size3" variant="variant3" className="absolute top-[387px] left-[2697px] text-[#ffa800] bg-transparent shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">найти билеты</Button>
      <Button size="size1" variant="variant1" className="absolute top-[429px] left-[195px]">Узнать больше</Button>
      <Button size="size1" variant="variant1" className="absolute top-[429px] left-[573px] text-[#2d2b2f] bg-[#ffca62] border-[#ffca62]">Узнать больше</Button>
      <Button size="size1" variant="variant1" className="absolute top-[429px] left-[951px] text-[#2d2b2f] bg-white border-white">Узнать больше</Button>
      <Button size="size4" variant="variant4" className="absolute top-[497px] left-[1806px]">ДАЛЕЕ</Button>
      <Button size="size4" variant="variant4" className="absolute top-[497px] left-[2252px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">ДАЛЕЕ</Button>
      <Button size="size4" variant="variant4" className="absolute top-[497px] left-[2697px] text-[#ffa800] bg-transparent shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">ДАЛЕЕ</Button>
      <Button size="size2" variant="variant2" className="absolute top-[537px] left-[199px]">отправить</Button>
      <Button size="size2" variant="variant2" className="absolute top-[537px] left-[577px] text-[#2d2b2f] bg-[#ffca62] border-[#ffca62]">отправить</Button>
      <Button size="size2" variant="variant2" className="absolute top-[537px] left-[955px] text-[#2d2b2f] bg-white border-white">отправить</Button>
    </div>
  );
}
