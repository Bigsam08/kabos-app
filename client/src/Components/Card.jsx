
import propTypes from "prop-types";

/**
 *  creating a card component that is reuseable
 * children prop makes the card accept any content
 * className to give the card a css styling
 * styles to give it an inline styling
 * 
 * importing propTypes to validate the type
 * classname as string, styles as object and children as important
 */



const Card = ({ title, icon, amount, children, className, styles }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-2xl p-6 w-[22rem] h-56 bg-gray-200 ${className} ${styles}`}
    >
      {/* Decorative Blobs / Shine */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full blur-xl pointer-events-none"></div>

      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div className="text-4xl">{icon}</div>
        <div className="w-10 h-8 bg-yellow-100 rounded-sm shadow-inner"></div> {/* chip placeholder */}
      </div>

      {/* Balance */}
      <div className="mt-6">
        <p className="text-2xl font-bold tracking-widest">{amount}</p>
        <h3 className="text-sm font-light uppercase tracking-wide">{title}</h3>
        {children}
      </div>

      {/* Optional: Add a card number / holder name for realism */}
      <div className="absolute bottom-4 left-6 text-xs tracking-wider font-mono opacity-70">
        **** **** **** 1234
      </div>
    </div>
  );
};


Card.propTypes = {
    children : propTypes.node,
    className : propTypes.string,
    styles : propTypes.object,
    title : propTypes.string,
    amount : propTypes.string,
    icon : propTypes.node.isRequired
}

export default Card;