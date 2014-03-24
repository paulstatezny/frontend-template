/** @jsx React.DOM */
define([
    'react',
    'templates/mixins/navigate'
], function(
    React,
    NavigateMixin
) {

    return React.createClass({

        displayName    : 'HomeModule',
        mixins         : [NavigateMixin],

        logout : function(event)
        {
            var success = _.bind(
                function() {
                    this.redirect('/');
                },
                this
            );

            event.preventDefault();

            this.props.user.logout(success);
        },

        render : function()
        {
            if (this.props.loggedIn) {
                return (
                    <div>
                        <p>
                            Logged in as <strong>{this.props.user.get('email')}</strong><br />
                            <a onClick={this.logout}>Log out</a>
                        </p>
                        <p>
                            <a href="/account/change-email" onClick={this.navigate}>Change email</a><br />
                            <a href="/account/change-password" onClick={this.navigate}>Change password</a>
                        </p>
                        <p>
                            <a href="http://project.vm/social-login/github/link">Link GitHub account</a><br />
                            <a href="http://project.vm/social-login/facebook/link">Link Facebook account</a>
                        </p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <p>
                            Hello. Please
                            <a href="/login" onClick={this.navigate}>log in</a> or
                            <a href="/register" onClick={this.navigate}>register</a>.
                        </p>
                        <p>
                            Or <a href="http://project.vm/social-login/github">log in with GitHub</a>.
                        </p>
                        <p>
                            Or <a href="http://project.vm/social-login/facebook">log in with Facebook</a>.
                        </p>
                    </div>
                );
            }
        }

    });
});
