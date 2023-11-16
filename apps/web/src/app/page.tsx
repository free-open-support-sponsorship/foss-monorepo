import { Button } from 'ui/button';
import { Loader } from 'ui/loader';

export default function Page(): JSX.Element {
    return (
        <main className="m-4 grid grid-flow-col place-content-start gap-4">
            <section className="grid place-content-start gap-4">
                <h3>Buttons</h3>
                <Loader />
                <Button size="small">Button</Button>
                <Button size="medium">Button</Button>
                <Button intent="secondary" size="medium">
                    Button
                </Button>
                <Button intent="danger" radius="full" size="large">
                    Button
                </Button>
                <Button intent="success" radius="full" size="large">
                    Button
                </Button>
                <Button intent="warning" radius="full" size="large">
                    Button
                </Button>
            </section>
        </main>
    );
}
