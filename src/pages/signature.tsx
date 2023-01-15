import { Button } from 'components/Button'
import clipboard from 'clipboard-polyfill'
import { useRef, useState } from 'react'
import { IconFacebook } from 'components/icons/components/IconFacebook'
import { IconLinkedin } from 'components/icons/components/IconLinkedin'
import { IconTwitter } from 'components/icons/components/IconTwitter'
import { IconYoutube } from 'components/icons/components/IconYoutube'
import { toast } from 'components/Toast'
import { Input } from 'components/Input'
import { Label } from 'components/Label'

const SignaturePage = () => {
  const [success, setSuccess] = useState<boolean>(false)
  const [name, setName] = useState<string>('Nguyễn Văn A')
  const [nameEng, setNameEng] = useState<string>('Nguyen Van A')
  const [title, setTitle] = useState<string>('Nhân viên kinh doanh')
  const [titleEng, setTitleEng] = useState<string>('Salesman')
  const [phoneNumber, setphoneNumber] = useState<string>('91 8628 660')
  const [facebook, setFacebook] = useState<string>('')
  const [youtube, setYoutube] = useState<string>('')
  const [linkedin, setLinkedin] = useState<string>('')
  const [twitter, setTwitter] = useState<string>('')

  const div = useRef(null)

  const copyToClipboard = () => {
    setSuccess(true)
    const dt = new clipboard.DT()
    const html = (div?.current as any)?.innerHTML.trim()
    dt.setData('text/plain', html)
    dt.setData('text/html', html)
    clipboard.write(dt)
    toast.success({ title: 'Success', message: 'Copy thành công' })
    setSuccess(false)
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <p className="font-bold mb-10 uppercase">Tạo chữ ký</p>
      <div className="flex justify-between space-x-20">
        <div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label>Họ và tên</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label>Họ và tên (Tiếng Anh)</Label>
              <Input
                value={nameEng}
                onChange={(e) => setNameEng(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Label>Chức vụ</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="w-full">
              <Label>Chức vụ (Tiếng Anh)</Label>
              <Input
                value={titleEng}
                onChange={(e) => setTitleEng(e.target.value)}
              />
            </div>
            <div>
              <Label>Số điện thoại</Label>
              <Input
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div>
              <Label>Facebook</Label>
              <Input
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>
            <div>
              <Label>Youtube</Label>
              <Input
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
            </div>
            <div>
              <Label>Linkedin</Label>
              <Input
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>
            <div>
              <Label>Twitter</Label>
              <Input
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div ref={div}>
          <table
            cellSpacing={0}
            cellPadding={0}
            style={{
              fontFamily: 'Arial, sans-serif',
              padding: '0px',
              minWidth: '270px',
              borderSpacing: '0px',
              maxWidth: '350px',
            }}
          >
            <tbody>
              <tr style={{ margin: '0px', padding: '0px' }}>
                <td>
                  <table
                    id="sig2"
                    style={{
                      width: '100%',
                      borderSpacing: '0px',
                      borderLeft: '3px solid #1E40AF',
                      padding: '7px 7px 7px 15px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{ paddingRight: '20px', whiteSpace: 'nowrap' }}
                        >
                          <h4
                            style={{
                              color: '#1E40AF',
                              fontWeight: 'bold',
                              fontSize: '15px',
                              margin: '0px 0px 3px',
                              lineHeight: '15px',
                            }}
                          >
                            &nbsp;{name}
                          </h4>
                          <h6
                            style={{
                              color: 'rgb(25, 27, 57)',
                              fontSize: '11px',
                              fontWeight: 'bold',
                              margin: '0px',
                              lineHeight: '14px',
                            }}
                          >
                            &nbsp;{title}
                          </h6>
                        </td>
                        <td style={{ textAlign: 'right', width: '40px' }}>
                          <a
                            href="https://newatlantic.vn/"
                            title="Newatlantic"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              textDecoration: 'none',
                              display: 'block',
                              width: '40px',
                              fontSize: '0px',
                              lineHeight: '1em',
                            }}
                          >
                            <img
                              className="bg-white"
                              src="https://www.tranhoangnam.dev/img/logo.png"
                              alt="logo"
                              width={48}
                              height={48}
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr style={{ margin: '0px', padding: '0px' }}>
                <td
                  style={{
                    margin: '0px',
                    padding: '0px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <p
                    style={{
                      color: 'rgb(103, 105, 131)',
                      fontSize: '11px',
                      lineHeight: '15px',
                      margin: '14px 0px 0px 3px',
                    }}
                  >
                    <b style={{ color: '#1E40AF' }}>P: </b>
                    <a
                      href={`tel:(+84)${phoneNumber}`}
                      style={{
                        textDecoration: 'none',
                        color: 'rgb(103, 103, 131)',
                      }}
                    >
                      (+84) {phoneNumber}
                    </a>{' '}
                    | <b style={{ color: '#1E40AF' }}>W: </b>
                    <a
                      href="https://newatlantic.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: 'rgb(103, 103, 131)',
                      }}
                    >
                      https://newatlantic.vn
                    </a>
                  </p>
                  <p
                    style={{
                      color: 'rgb(103, 105, 131)',
                      fontSize: '11px',
                      lineHeight: '15px',
                      margin: '4px 0px 10px 3px',
                    }}
                  >
                    <b style={{ color: '#1E40AF' }}>A:</b>
                    <span>
                      &nbsp; A60, đường Phú Thuận, phường Phú Thuận, quận 7, Hồ
                      Chí Minh, Việt Nam
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ margin: '0px', padding: '0px' }}>
                <td style={{ lineHeight: '1em', fontSize: '0px' }}>
                  <a
                    href={facebook}
                    target="_BLANK"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: '9px',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    <IconFacebook
                      style={{
                        width: '20px',
                        display: 'inline',
                        color: '#1E40AF',
                      }}
                    />
                  </a>
                  &nbsp;
                  <a
                    href={youtube}
                    target="_BLANK"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: '9px',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    <IconYoutube
                      style={{
                        width: '20px',
                        display: 'inline',
                        color: '#1E40AF',
                      }}
                    />
                  </a>
                  &nbsp;
                  <a
                    href={linkedin}
                    target="_BLANK"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: '9px',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    <IconLinkedin
                      style={{
                        width: '20px',
                        display: 'inline',
                        color: '#1E40AF',
                      }}
                    />
                  </a>
                  &nbsp;
                  <a
                    href={twitter}
                    target="_BLANK"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: '9px',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    <IconTwitter
                      style={{
                        width: '20px',
                        display: 'inline',
                        color: '#1E40AF',
                      }}
                    />
                  </a>
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table>
          &nbsp;
          <table>
            <tbody>
              <tr>
                <td
                  style={{ borderTop: '2px solid #1E40AF', width: '398px' }}
                />
              </tr>
            </tbody>
          </table>
          &nbsp;
          <table
            cellSpacing={0}
            cellPadding={0}
            style={{
              fontFamily: 'Arial, sans-serif',
              paddingTop: '0px',
              minWidth: '270px',
              borderSpacing: '0px',
              maxWidth: '350px',
            }}
          >
            <tbody>
              <tr style={{ margin: '0px', padding: '0px' }}>
                <td>
                  <table
                    id="sig2"
                    style={{
                      width: '100%',
                      borderSpacing: '0px',
                      borderLeft: '3px solid #1E40AF',
                      padding: '7px 7px 7px 15px',
                      boxSizing: 'border-box',
                    }}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{ paddingRight: '20px', whiteSpace: 'nowrap' }}
                        >
                          <h4
                            style={{
                              color: '#1E40AF',
                              fontWeight: 'bold',
                              fontSize: '15px',
                              margin: '0px 0px 3px',
                              lineHeight: '15px',
                            }}
                          >
                            &nbsp;{nameEng}
                          </h4>
                          <h6
                            style={{
                              color: 'rgb(25, 27, 57)',
                              fontSize: '11px',
                              fontWeight: 'bold',
                              margin: '0px',
                              lineHeight: '14px',
                            }}
                          >
                            &nbsp;{titleEng}
                          </h6>
                        </td>
                        <td style={{ textAlign: 'right', width: '40px' }}>
                          <a
                            href="https://newatlantic.vn/"
                            title="Newatlantic"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              textDecoration: 'none',
                              display: 'block',
                              width: '40px',
                              fontSize: '0px',
                              lineHeight: '1em',
                            }}
                          >
                            <img
                              className="bg-white"
                              src="https://www.tranhoangnam.dev/img/logo.png"
                              alt="logo"
                              width={48}
                              height={48}
                            />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr style={{ margin: '0px', padding: '0px' }}>
                <td
                  style={{
                    margin: '0px',
                    padding: '0px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <p
                    style={{
                      color: 'rgb(103, 105, 131)',
                      fontSize: '11px',
                      lineHeight: '15px',
                      margin: '14px 0px 0px 3px',
                    }}
                  >
                    <b style={{ color: '#1E40AF' }}>P: </b>
                    <a
                      href={`tel:(+84)${phoneNumber}`}
                      style={{
                        textDecoration: 'none',
                        color: 'rgb(103, 103, 131)',
                      }}
                    >
                      (+84) {phoneNumber}
                    </a>{' '}
                    | <b style={{ color: '#1E40AF' }}>W: </b>
                    <a
                      href="https://newatlantic.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        color: 'rgb(103, 103, 131)',
                      }}
                    >
                      https://newatlantic.vn
                    </a>
                  </p>
                  <p
                    style={{
                      color: 'rgb(103, 105, 131)',
                      fontSize: '11px',
                      lineHeight: '15px',
                      margin: '4px 0px 10px 3px',
                    }}
                  >
                    <b style={{ color: '#1E40AF' }}>A:</b>
                    <span>
                      &nbsp; A60, Phu Thuan Street, Phu Thuan Ward, District 7,
                      Ho Chi Minh, Viet Nam
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ margin: '0px', padding: '0px' }}>
                <td style={{ lineHeight: '1em', fontSize: '0px' }}>
                  <a
                    href={facebook}
                    target="_BLANK"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: '9px',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    <IconFacebook
                      style={{
                        width: '20px',
                        display: 'inline',
                        color: '#1E40AF',
                      }}
                    />
                  </a>
                  &nbsp;
                  <a
                    href={youtube}
                    target="_BLANK"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: '9px',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    <IconYoutube
                      style={{
                        width: '20px',
                        display: 'inline',
                        color: '#1E40AF',
                      }}
                    />
                  </a>
                  &nbsp;
                  <a
                    href={linkedin}
                    target="_BLANK"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: '9px',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    <IconLinkedin
                      style={{
                        width: '20px',
                        display: 'inline',
                        color: '#1E40AF',
                      }}
                    />
                  </a>
                  &nbsp;
                  <a
                    href={twitter}
                    target="_BLANK"
                    rel="noopener noreferrer"
                    style={{
                      marginRight: '9px',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    <IconTwitter
                      style={{
                        width: '20px',
                        display: 'inline',
                        color: '#1E40AF',
                      }}
                    />
                  </a>
                  &nbsp;
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Button
        className="mx-auto"
        appearance="default"
        loading={success}
        onClick={copyToClipboard}
      >
        Copy
      </Button>
    </div>
  )
}

export default SignaturePage
