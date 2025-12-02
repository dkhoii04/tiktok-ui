import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'; //lấy Link react-router-dom
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
   to,
   href,
   primary = false,
   outline = false,
   rounded = false,
   text = false,
   disabled = false,
   small = false,
   large = false,
   children,
   className,
   leftIcon,
   rightIcon,
   onClick,
   ...passProps
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps,
   }; // ...passProps để nhận các props khác truyền vào

   // nếu disabled thì bỏ các event on...
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }

   // to: link nội bộ, href: thẻ a (ngoại)
   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   const classes = cx('wrapper', {
      [className]: className, // TH muốn truyền className bên ngoài vào (css riêng cho button)
      primary,
      outline,
      rounded,
      text,
      disabled,
      small,
      large,
   });

   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;
