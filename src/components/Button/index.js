import clsx from "clsx";
import styles from "./Button.module.scss";

function Button({
    href,
    children,
    active = false,
    outline = false,
    hoverBlue = false,
    hoverOrange = false,
    ...restProps
}) {
    let Component = "button";

    const classes = clsx(styles.wrapper, {
        [styles.active]: active,
        [styles.outline]: outline,
        [styles.hoverBlue]: hoverBlue,
        [styles.hoverOrange]: hoverOrange
    });

    const props = { ...restProps };

    if (href) {
        Component = "a";
    }
    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}

export default Button;
