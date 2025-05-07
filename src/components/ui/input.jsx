export function Input({ name, placeholder, value, onChange }) {
    return (
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          display: 'block',
          width: '100%',
          padding: '8px 12px',
          marginBottom: 10,
          borderRadius: 4,
          border: '1px solid #ccc'
        }}
      />
    );
  }