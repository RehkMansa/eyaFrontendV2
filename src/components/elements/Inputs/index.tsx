type Props = {
    name: string;
    error: string;
    onChange: (e: React.ChangeEvent<unknown>) => void;
    placeholder: string;
    value: string;
    type: string;
};

export const Input = ({ name, error, onChange, value, placeholder, type }: Props) => (
    <div>
        <input
            type={type}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
        {error && (
            <p
                style={{
                    fontSize: 13,
                    color: "tomato",
                    marginTop: -5,
                }}
            >
                {error}
            </p>
        )}
    </div>
);

export const TextArea = ({ name, error, onChange, value, placeholder, type }: Props) => (
    <div>
        <textarea
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            cols={40}
            rows={4}
        />
        {error && (
            <p
                style={{
                    fontSize: 13,
                    color: "tomato",
                    marginTop: -5,
                }}
            >
                {error}
            </p>
        )}
    </div>
);
