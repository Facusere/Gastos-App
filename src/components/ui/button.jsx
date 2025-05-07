export function Button({ children, onClick, variant = 'primary', size = 'md' }) {
    const styles = {
      primary: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none'
      },
      secondary: {
        backgroundColor: '#6c757d',
        color: '#fff',
        border: 'none'
      },
      destructive: {
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none'
      }
    };
  
    return (
      <button
        onClick={onClick}
        style={{
          padding: '8px 16px',
          borderRadius: 4,
          cursor: 'pointer',
          marginRight: 8,
          ...styles[variant]
        }}
      >
        {children}
      </button>
    );
  }