import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/aa6c1b87e409e67cbc0058d0e1a12274~tplv-tiktokx-cropcenter:168:168.jpeg?dr=14577&refresh_token=a7c0637d&x-expires=1765360800&x-signature=MFsaocLRrM4%2BZ73Tw0Fgx1aR0HQ%3D&t=4d5b0474&ps=13740610&shp=a1d2006b&shcp=a1d2006b&idc=my2"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;