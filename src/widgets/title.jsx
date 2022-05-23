
export function Title({
    title,
    current,
    maximum
}){
    const toPrev = () => {
        window.location.href = window.location.pathname + '?lesson=' + (current - 1);
    }

    const toNext = () => {
        window.location.href = window.location.pathname + '?lesson=' + (current + 1);
    }

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline'
        }}>
            <h4
                style={{
                    margin: '0 6px',
                    cursor: 'pointer',
                    color: '#6a6a6a',
                    display: current === 1? 'none': 'unset'
                }}
                onClick={toPrev}
            >上一关</h4>
            <h1>{ title }</h1>
            <h4
                style={{
                    margin: '0 6px',
                    cursor: 'pointer',
                    color: '#6a6a6a',
                    display: +current > +maximum? 'none': 'unset'
                }}
                onClick={toNext}
            >下一关</h4>
        </header>
    )
}