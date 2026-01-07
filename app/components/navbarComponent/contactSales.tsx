export default function ContactSales() {
  return (
    <button className="relative overflow-hidden py-[11px] px-[18px] rounded-[43.62px] text-white text-4 font-medium transition-colors duration-300 hover:shadow-navbar group cursor-pointer"> 

      <span className="absolute inset-0 bg-primary transition-transform duration-300 ease-out group-hover:-translate-x-full" />

      <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
        Contact Sales
      </span>

      <span className="absolute inset-0 bg-white -z-10" /> 

    </button>
  );
}
