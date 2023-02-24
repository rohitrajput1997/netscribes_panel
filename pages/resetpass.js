import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NSButton from '../components/common/NSButton';
import NormalInput from '../components/common/NormalInput';
import apis from './api';

const MetadataAndLink = dynamic(() => import('../components/MetadataAndLink'));

function ResetPass() {
    const router = useRouter();
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isValidate, setIsValidate] = useState(false);

    const handleChangePassword = () => {
        setLoading(true);
        setIsValidate(true);
        if (password !== reEnterPassword) {
            setIsValidate(true);
            setLoading(false);
            return;
        }
        if (!passwordValidation(password)) {
            setIsValidate(true);
            setLoading(false);
            return;
        }
        if (!passwordValidation(reEnterPassword)) {
            setIsValidate(true);
            setLoading(false);
            return;
        }
        if (router?.query?.token) {
            apis.resetPassword({ password, reEnterPassword, token: router?.query?.token })
                .then(({ data }) => {
                    if (data.status_code === 200) {
                        NSToaster.success(data?.status_message);
                        NSCookies.clearCookies();
                        router.push('/login');
                    } else {
                        NSToaster.error(data.status_message);
                    }
                })
                .catch(() => {
                    NSToaster.error('Something went to wrong, Please try after sometime.');
                })
                .finally(() => {
                    setLoading(false);
                    setIsValidate(false);
                });
        } else {
            NSToaster.error('Token unavailable');
        }
    };

    return (
        <div id="login">
            <MetadataAndLink title="Email to Reset Password" />
            <div className="login_container">
                <div className="image_container" style={{ backgroundImage: 'url(/images/login/bg.webp)' }}>
                    <div className="login_inner_container">
                        <div className="flex ml-10">
                            <Image src="/images/logo.svg" width={246} height={43} alt="logo" />
                        </div>
                        <div className="flex mt-9">
                            <div className="login_inner_container_card">
                                <p className="title">Reset Password</p>
                                <div className="form_input mt-6">
                                    <div className="flex flex-col">
                                        <NormalInput
                                            title="Enter Password"
                                            placeholder="Enter Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            validation={isValidate && !passwordValidation(password)}
                                            errorMessage={
                                                <ul>
                                                    <li>Password must be at least 8 characters long.</li>
                                                    <li>Contain an uppercase letter, a lowercase letter and a number.</li>
                                                    <li>One Special Character.</li>
                                                </ul>
                                            }
                                        />
                                        <NormalInput
                                            title="Re-enter Password"
                                            placeholder="Re-enter Password"
                                            value={reEnterPassword}
                                            validation={isValidate && !passwordValidation(reEnterPassword)}
                                            errorMessage={
                                                <ul>
                                                    <li>Password must be at least 8 characters long.</li>
                                                    <li>Contain an uppercase letter, a lowercase letter and a number.</li>
                                                    <li>One Special Character.</li>
                                                    {reEnterPassword !== password && <li>Renter password same as password</li>}
                                                </ul>
                                            }
                                            onChange={(e) => setReEnterPassword(e.target.value)}
                                        />
                                        {(!isValidate && reEnterPassword === '') || (!isValidate && !passwordValidation(reEnterPassword)) ? (
                                            <ul className="common_error" style={{ color: 'black' }}>
                                                <li>Password must be at least 8 characters long.</li>
                                                <li>Contain an uppercase letter, a lowercase letter and a number.</li>
                                                <li>One Special Character.</li>
                                            </ul>
                                        ) : (
                                            <></>
                                        )}
                                    </div>

                                    <div className="flex flex-col forgot_password">
                                        <NSButton className={'btn mt-6'} title={'Reset Password'} isPrimary onClick={handleChangePassword} loading={loading} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPass;

