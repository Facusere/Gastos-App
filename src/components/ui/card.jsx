export function Card({ children }) {
    return <div style={{ border: '1px solid #ccc', borderRadius: 8, margin: 20 }}>{children}</div>;
  }
  
export function CardContent({ children, className }) {
    return <div style={{ padding: 16 }} className={className}>{children}</div>;
  }
  