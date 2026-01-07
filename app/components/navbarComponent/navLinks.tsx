interface NavLinkProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

export default function NavLink({ mobile = false, onLinkClick }: NavLinkProps) {
    return (
      <ul className={`flex ${mobile ? 'flex-col text-center' : 'flex-row'} gap-4 text-text-secondary font-medium text-[16px]`}>
        <li className="py-4 px-3 hover:text-black cursor-pointer" onClick={onLinkClick}>How it Works</li>
        <li className="py-4 px-3 hover:text-black cursor-pointer" onClick={onLinkClick}>Pricing</li>
        <li className="py-4 px-3 hover:text-black cursor-pointer" onClick={onLinkClick}>Use Case</li>
        <li className="py-4 px-3 hover:text-black cursor-pointer" onClick={onLinkClick}>FAQ</li>
      </ul>
    );
}