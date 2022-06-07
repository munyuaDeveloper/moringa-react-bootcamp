import "../css/Navbar.css"
import {Link} from "react-router-dom";

const Navbar = ({isLoggedIn, onLogout}) => {

    function logoutUser() {
        onLogout();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark border-bottom">
                <div className="container-fluid nav-container">
                    <Link to="/"  className="navbar-brand">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUQAAACcCAMAAAAwLiICAAAAtFBMVEX///+VoEo+QCxOWyeNmTaOmjqQmz5IVhnj5dKTnkY/TgCSnUPx8+n19e5KWCH09fJBUA06SgDU2LzQ1bY5Oybt7url5+Hc3tYiJQAxMxqutnumr2vAxprKz6u0vIbP0sihq2KDi27Aw7a2uquMk3ltd1KtsqF2f16epI9fa0Ccp1gjOABmaFoqPgCWnIXR0c69vrmGkyJXYzOZmpKxsqyHiX94em9aXE1LTTsVGQAULwAdIACDueA7AAASBUlEQVR4nO1dh3biOhPGwQUwcaEX0ztZkixJNtn7v/97/SouM5JsTDbZLDHfPecusWVb+hhN08iUSv86tl/dgW+A9uHK4h/j3vLdr+7DxcMrW/df3YdLx6RWLte+uhOXjq1VLnvzr+7FhWPnlMvO7Kt7ceEgs5mI4lf34rLR8SmJfvur+3HR6HJJnKScvtrtPJh4jES1ZemU/b/cnX8S3VMNQhIXynO+Y318ly4Ph00nu8Gklkriwi87u0/p1YVhZ/nZaq1Tw9M5sTAT/+r7cNxbZe+YZXpdbp0jwzJbRyfafuo0LxrmROU5XtaULkMXZ+GvouPUCS/7J5RBMcAEzallyOLSSpxtIn1RGD2n0/yqEjk2VKCccnoDap4j1bdyYpl0nHTPp3Dg1tcSDMQafK7Fqo+aklo3/lh2jn+pk/88jg5TeshhdA/AYGytcpiVJYIYkThzoLmhmKQFNUUAkylBu20tkHFwfWfDPrAwOiSRyq8HnaNJsRcRNlZZlCoP+S7bAz+3tmI7Tb1HawOuaNdEjVAsuIxE6DYTPYkkM3RrmA3iIkqsjbUCLYjD46C/C4cu96eT1SjigauSXzSKDmf2wqshwVt7hXd3mFoE2S5qa2TvxQUhyvqwRufI7C64JBJZ9Cy4pEfZsiQ7wexKKK8THKkQQSxby0/u5D8Pd+MnksRyDnJqgR5OSThQ0bXWylOFwuQY51e5Ix1xGjuQNOOgjpWh71NwxEqQ5WFjO7GNkzx+2pRd0Auu6VkETmIkiWsvSvIc0/LY1JrLOrTY6CKduPAcj1uT5SFlxtIY8Fqvg9FG1nkSu4DztAws8cK9q1kRYEG3kVJay05gb5xi5nPa3Uk3NSvNpmccsRD/xXEyb7a0irm4v/G9ml/bxBZ5DfMPcxTE0bxDLTPPtT4UNA22YibYc0Ia731rm5gGH+o4Gu45meFIcVOJM5bSdnyeUegSJ9CPiVui4tgt5fuv9+8ysPBZDswqM77o4p23C1Vb+4Akj2jFqweTAnfpexa1GpQgttYSL57eczbDud72nNp1bTQN7ny5szyek2bryHjx1I0MRsfyc0XGhdWNEXghIlo8XXuRjXZ3eUhc3n1Cvy4La2nx1DmruNM9etcC+dLMwytWJIbOWp0X5m6bqNdCxi0CZrg0hHjZWbkZ7GG7jnOtEWPY+g6sAHOycv7rGlpUWdGdGtcsBEX36DuxPK0yScTZr7WPa8TcdpEdy/nOP4TjJ05P+oY0EuKA9UEXKoLJ8ljzfd9bbb/9ikF3vVztdqvlQhxpZx0eWaE0oWCn1x5cmmLFESxL4W5rHouECKmWX/7WRaDrsu85FJbnO1u1IzOzYPbmEZ9cWnCuW7Egdo81p5zA+77Vd2vfAwMtW/5SRSMRNrDD4gmfRAqTLShEPuVk51shj47nz75tvNjZ+BYg0fGVAUnHB7LW/oFPIoVJZ7OfiFxnvfKIUvStzeJbm5fO1qLZBzKdyXyepcS8RxAxd2/wOUpirBOJM+QL7o3bKYR97sy3s81muU7PGixA8dzDb3yO8JYozJ3jf2sL8kcAmvL5t1B+YwGFmb737wqIpx42z10fBHnXbZL58NIXzHM5X4qxeGh3u2m5r9e+YJ7XBS/qVGOx8f0aideSdVQXqMGbm77Qnp98+BtduxyEC1fEQ46DPaAGezc9lZC+XOc0Rjt2wb0jF7OX5Fzvpv8oX/IoiucVpc6SuOAEfhiMvMVnHvo3omWh7X8nx7rr2Wq329zPC1lRUqKrfrGv3JnM53FF9v/ioOOxf9P6IV3X6kUqcV32LStMaOyK6HjPV76vzrW04hn81JctS+lHvxfe4QATGo5X+7apmxTMy56T9t6bt1gpvhASRcvy1I+Fc+HUrIRD/74IYXMCd8V26aUsjvzoxZ9aN6JleSC25jn+axKq05q/WxeLwlLXY5m/tBcwvcQ6742SiC0LOdJDDk57MplPugVjMNqQhjdHQjz1f4WfyGwWLMuLSksWEG3OoZe6pPfc73HBcnuERMQZmcw3rV/qywoFvl/c26Q2eOiHWq/LSOyBMJDN7+eU6wqENfNLahllCyROabEPD30miYlleaQHeteYj7+IREzrY/RDaXvmJCaW5Uac3gXF1qLFxoogbXJPleTrK5G7Xy3O1BMjsfUaNXmSDU0xUfP8mTwfO0vf49b61+/WIw2ZqcNN3UQ6f3mb7psomEVFdzZXuHRL34rLQV56/VfK3CM3I7ESfOmFf11ziSq0yxZ8vcsTZ4uwyIwztyzEYvM/bnqZ9yoqOqwCBJiaJ05e71crJPGl9CvkE2rIKxK4rPrDh3Wdz5yyVkTc21s/5rB/nc0K0BfkOEJS7DkWPAH918IFyXkwoZuqJJcnhcXe1TIrsfOde0UJl4rF1tUwq+HOU4rgnvoih/23oq6jvB+/WpjD3svpa64QgEWx1VMsnV5xCi/9f38q12/pf/R/4OBtJRgPp9PhIGjcylc0Mk7CezRGQTAej4MgaFbqqib16NHobKUZBOwa/ieczj2Uh+Vdp//Bq0fjqWaa2nTcVD4zvriSDdTYpWMZDPeaaegUhjYMGuD2eoSf8XWNoW7YdpXAJhcN0f0qgZacNIWTyUMbA1s3TNO0OUzD0PeB2Lb+M352EN9/bBj8MvMnP/IjIRGnYSvx5Xp8x8A2TNI5TdNI9/SpunelxpgMIhvxLUv1Jm1N+8Tuy0FHr+9HUZvk+JQfaNpG0pgeN6Yx5429buOT+kDuY32sm7YmokruO0LtbvX43D7kZaonF4bjeAMkossrRtTS5Pe9Hev4screlQLDwINQwQ6fEVTJWFJaV02zIZCo6fR7q+8NubHOv9GGZsi3szVxTge6zGD0VBvKRkKiprPvaazD+4ckQuOcQiIf8kjxXFsTI5uGkdY7fGE0lGy69bFAYnVIO6K8iI6xPlVQSC/TcC+nZsZDq3qQtAQkUlmqa3h4IYm9HCSazdLtVP72Cey9+A1n9A5ex1qPssbCnzzAJBJRHCo7wohKoZc+D82Z6YkvGrAISCTzuSI+gJPoAhJbaSRW94207pkBvGaUk8PcJGrGCJOomamyW9UybqeDOTo++Vi9oSCRjFUaHiexDUhM04lUUaQ/D1jRSl4O85Oo6beYxHeC6oEzemmoSNRkAeYkdnORmAF7nFyinTQo4YhMPTeJ9P757pqN5Mve5+ilHU2w22zG+TgegK+Nk9k5SUy+NGJU8rQnDE5HdRWJ1RDS/RU3sYmbRDwjJR/M5RNPmiP1uIgnSX0uU7hV5IPlIvERkojCFQWJNneGsQU0Ym0zxf2ohl6scHSfxBAjgwzBZEMmMLX9dEig6aZwf6kf+jSoVEgY0JRnWNWojknwQU42kA2O5/MA9sc2BqMGdf4boyFS+8SW5ifxGZKIMj0iiVXDJmHELY0vhrB3sWmpo+fZ+nDMMbDRnczkEc3BOBg1G5QP6Cq5SIETEcIdsfUg0cND4SvSB2kWJHouujc02nUoBJFbrySRhkI2C4k4iTD/gJcEBBKNPewdEID4K27CLhsBoKUCpTH6jrMAFUN1jEnUB8hzRlJr7nEQBdWffisNyxaCBajTdTeFRNvQteGACsdgOOUGEuYfcIkiIrGq46GjiaJgFns+SEiBnUwHGD2RCcST8B0E4KnQyDHA7zVUO7C9LgQy8LsLm4sk2vpYDnZB6JxBYnUqPA51JTwGZ4NdOt0+C7C9BkmU5Bh20xBzInWZFTD/q1LUCjgPxUAg0RiokkKvkES0tAJ7p0vRnSmfhCIRCO0zh6oAUg2ZJEIhNyQhga4yd6CNjHuVBskYwqmOSdTVqgiGzn2U1EYkivyjk3W5w+LD3Myhymh8EImQsoZIitwc+Fxh0gaRmMIhCp1xDdO5JGbzJI0mG59GYuao0GO5/wtJlOZXCBeR+AZPfSyJ0OjkMc9/hUTpsbIKy5Zcjg5aMu2n3vDM6Sw/DqpsmcRb4u02YOI7v2E5k0T47YjWDxsiPqw8JD6gZSoU951NYqbKzlCYjYEpJcJRIPKRJMpaDwJRlpvER0wiDFnOJhEMVdIeddlMhmia6jzqXyBxKtEhq6Q8JD4jElHIcjaJ0AMTMsko1YD6os71fh6JQSaJskrKQyJedUbe9tkkBpAowQLD6QkzkIoU3SeTmDxQFTq9i0Rc/4C87bNJRHEifuAQcmWkHL9YEl8xidDbPpvEEnbux5U6BzG1kCvQ93wJyH+eRFyIg7zt80kcILmyoyVmA6deAQ1yJpyvt5ufZ50/g0Sxsu6PSMy3xKIrb6Kx6gdzP6Qpxsbn+YnZhuVd1rktkAgdxfNJFERRDZAkQ0zpASxX+bSI5Qw/MS+JD0J1IlwgeAeJ7kmXDyW2Ye5Mxx38NBKb2RHLe5ztR4FE6Ci+g8RS/fSKLugITFgKqb1PIxHl8CQ+5DHnIFGsk4WO4ntILFVOsIiSSalRzN9KQEiJTTk9kYPEF5HEp5Qb5pzOaSUeIWwdcpWV9vk0ErObw8DKzEviD6HWGG4UP5/EW0WxGqJwiG6T1b9PIxGJv5QfBMupoQOUg0TBwUEZxfNJhGtrVQRaQmmKKzxfQ+I0I8KHzW15jSWFRGkDBsgonk1iE5SR2UMI4vs15Q58DYnQrxLbQ9MdNj9NYkciEfg4Z5OYCKKYflDjNt2wNJGr9KEkIg/fRuNCvkU4qtMkih4O8nHOJVEuzD0BaFjQinFDw/bpQ0lEEX4V3q4Jy3GiqX6aRMVOoMTHOZfE5JCsa9SAVMX+YyUQa4s+mMQxsn6mPiXKZjweTHEFUJRWPk3iS0siMfFx3k9iUoGVDVTjRiuLmsHAVBQ1fyyJuGSIFdnbqOoejfg0iW8SicDH+QMSNbM6HAggtkX0bQOc9aEFYsqw8WNJzBXhx+rlNIny7kjg4/wJiaKLE+4oMQN0n7yFtR9M4olqOTzgkyTKxhnmcd5vWNJh6si/zVOzqn04iaXGyZ6qa7aVJMrGGfo456/25aHEmMK7pI0G14h/NIkn6/P1RKefJFE2ztDH+aOFqnTYkMWUOn5zClfRP55EIosZehGVEZ4k8VWyK3Br2tkk5pnPmhCxDhUsss048Bv5eBJLt4M0GkmEj7ZhniDRVb27IFmrOj92HuVbd0IZqIHIfJVvGYSe+CeQSDf3GYYpODZV0xBrOE+RKKa1uXmO16reszyQi0Vcz9qAex2ryZ5QIIolUF/yUyLxJzgpjfJnxpXErx9oelTBouu6NpQ2mZ64PU0mthSIUxAVeLlEIjyZSFaQax1ZyCjTXbemSbdC6PukpN1NniB3/QNxG24qrotDzIcfSvzRy1zixLatoxolM2XTRnxdYxSMmpXre2RKwGUhcR/aNd5EKe+cUWExkeh4mSaYeJeK/K+IUU8shELW9lLm/QoFwI4fBYmwfmP69zt3KYC5dZnE7OrKy8W9f5hFBnGy8g9l/lrAOX+Z7zp6wd18dziAn21wl7VD/KuHbjmxqIUkcXnstDfhez2Xh0WnPTkyFhf8V4m34Qu6V9a8TU5Fv7c0uVt23e72jrPq3hWcRPZOT87B2uP/srd8YhJnIXsbfrR9x18g3+X/Fp7E5Dci3Tv4Dl9EYjdmib/QdxP9AN26zK8sOImTu0izzdHP2S92E4oZI3Ebv+2cvVq6dBdtMHDZpxQSFZ7gn1hn699D/Cb99uxuwzhYo/fCL6wdRZnJ3CwW1wWd1527uBn/wWdAomLBEWBafT+JtX8PfvJzBO7GYiSiH7hH03mZ/LjuBpN26AokTrN2hqONv6oXO10ymKbr3sFDiMS5FR3eMZm0orfSdg/0/5BEtKBrBDBrWEepxrSNhheICfMD+Y+97uB8xta5Fs7n+YHRtfBD1o7sckhiE69+G+yVcOxFGTpeGM+zzfRC0PmvSzlhn12fed0LhZ/YvWNsrf8LfxtnZtFp3NlxzweSKK6Kp0LeInu5WNytjofQt3E3d7uVz/iJfsf0PpTOzu6wWh2OsRO0Pjib412oKt07348N9jTfCuj3yj+05+CXl9qTeUQoJ6UdL552Jvi1vpP5JJa/DkH0OedivK4sJLgixCDPoqn4HpUrBOxPr7FUq6dvU3DsT8miXf1GVuWzkP6eUSaGyheoXiGiPtbV75Sl79odXG1KXlSCwV7icD8IGu9cEv0/ZbFvXE4FrW0AAAAASUVORK5CYII=" className="logo" alt="logo" />
                    </Link>

                    <div className="navbar pull-right" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link  to="/"  className="nav-link text-secondary" >Home</Link>
                            </li>
                            <li className="nav-item d-none d-sm-block">
                                <a  href="/"  className="nav-link text-primary" >|</a>
                            </li>

                            <li className="nav-item">
                                <Link  to="/about"  className="nav-link text-secondary">About us</Link>
                            </li>
                            <li className="nav-item d-none d-sm-block">
                                <a  href="/"  className="nav-link text-primary" >|</a>
                            </li>

                            <li className="nav-item">
                                <Link  to="/profile"  className="nav-link text-secondary">My Account</Link>
                            </li>
                            {
                                isLoggedIn &&
                                    <li className="nav-item">
                                        <p  onClick={logoutUser} className="nav-link text-secondary">Logout</p>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar
